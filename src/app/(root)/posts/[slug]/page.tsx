import Image from "next/image";
import React, { useState } from "react";
import ShareOpportunity from "@/components/ShareOpportunity/ShareOpportunity";
import Comment from "@/components/comments/Comments";
import { ParseContent } from "@/components/parseHtml/ParseContent";
import SinglePageClient from "@/components/SinglePageClient/SinglePageClient";
import BreadCrumb from "@/components/reusable/BreadCrumbs/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import { getAllPostBySlug } from "@/utils/actions/get-all-posts-by-slug";
import { title } from "process";
import { Metadata } from "next";

type SinglePageProps = {
  params: {
    slug: string;
  };
};

// export const metadata: Metadata = {
//   title: '...',
//   description: '...',
// }

 export async function generateMetadata({ params }: SinglePageProps) {
  try {
    const response = await getAllPostBySlug(params?.slug);
    if (response?.length === 0) {
      return {
        title: "Not Found",
        description: "The page you are looking does not exist",
      };
    }
    console.log('metadata', response?.[0]?.title);
    

    return {
      // openGraph: {
        title: response?.[0]?.title,
        description: response?.[0]?.desc.substring(0, 50),
        images: [response?.[0]?.img]
      // },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking does not exist",
    };
  }
}


export async function generateStaticParams() {
  // const BASE_URL = 'http://localhost:3000'
  try {
    // fetch all posts
    // const response = await fetch(`${BASE_URL}/api/posts/allPosts`)
    const response = await fetch(`${process.env.API!}/api/posts/allPosts`)

    if(!response.ok){
      throw new Error(`Failed to fetch blogs: ${response.statusText}`)
    }
    const result = await response.json()

    // check if result is not array, then return error
    if(!Array.isArray(result)){
      throw new Error(`Invalid data format received: ${typeof result}`)
    }
    
    if(result.length === 0) return [];


    // map the result and return slug in key-value pairs
    return result.map(post => ({
      slug: post.slug
    }))

  } catch (error) {
    console.error('Error fetching articles', error);
    return []
  }
}

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.API}/api/posts/${slug}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Request Failed");
  }

  return res.json();
};

async function SinglePage({ params }: SinglePageProps) {
  const { slug } = params;

  const data = await getData(slug);

  if (!data) {
    return <h1>Nothing Found...</h1>;
  }
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <BreadCrumb current={data.catSlug} />
      <div className="relative flex flex-col gap-4">
        <SinglePageClient data={data} />

        <div className="relative flex flex-col items-center border mt-3 shadow-lg shadow-gray-500/50 rounded-lg justify-center p-2 sm:p-6 gap-5">

          {/* <div className="relative text-start items-center px-3 gap-3 ">
            <h1 className="text-2xl  flex flex-1 md:text-4xl py-4 font-medium font-sora  object-contain  w-[90%] ">
              {data.title}
            </h1>
            {/* <p className="font-medium py-4 ">
              Planning a new website can be exciting and — if you’re anything
              like me — a little daunting. Whether you’re an experienced
              freelancer, a team of hardened developers, or a small business
              owner, a well-structured plan is critical for success.
            </p>
          </div> */}
         

         {data.img && (
            <div className="flex items-center justify-center w-full overflow-hidden">
              <div className="relative w-full h-0 pb-[100%] md:pb-[56.25%] sm:pb-[75%]">
                <Image
                  src={data.img}
                  alt=""
                  layout="fill"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          )}

          {/* <p className="font-inter font-medium py-4 px-4">
            In this post, I’ll give you the benefit of my experience, guiding
            you through the essential steps of planning a web design project and
            ensuring that you start off on the right foot and follow through to
            a successful end product.
          </p> */}
        </div>

        {/* <div className="authorContainer  flex flex-col md:flex-row justify-between border shadow-lg shadow-gray-500/50 rounded-lg w-full p-4">
          <div className="authorImageContainer flex flex-row gap-6 items-center">
            {data.user?.image && (
              <Image
                src={`${data.user.image}`}
                alt=""
                width={50}
                height={50}
                className="avatar rounded-full"
              />
            )}

            <div className="authorTextContainer">
              <div className="font-sora font-bold uppercase">
                {data.user.name}
              </div>
              <div className="font-inter text-gray-600">
                {data.createdAt.substring(0, 10)}
              </div>
            </div>
          </div>
        </div> */}
       <div className="authorContainer flex flex-row justify-between items-center border shadow-lg shadow-gray-500/50 rounded-lg w-full p-4 ">
  <div className="authorImageContainer flex flex-row gap-6 items-center w-auto">
    {data.user?.image && (
      <Image
        src={`${data.user.image}`}
        alt=""
        width={50}
        height={50}
        className="avatar rounded-full"
      />
    )}
    <div className="authorTextContainer flex-grow">
      <div className="font-sora font-bold uppercase">
        {data.user.name}
      </div>
    </div>
  </div>
  <div className="flex items-center justify-end w-auto mt-0">
    <div className="font-inter text-gray-600">
      {formatDate(data.createdAt)}
    </div>
  </div>
</div>

        <div className="postContentContainer flex flex-col items-start gap-5">
          {/* <div className="prose post">
            {/* <div
              className="description"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.desc) }}
            /> 
          </div> */}
          <ParseContent content={data.desc} />
          {/* <div className="textContainer flex-[1] font-medium w-fit text-xl md:text-3xl font-sora">
            <h1>Define Your Goals and Objectives</h1>
          </div>
          <p className="font-inter font-medium ">
            I find it helpful to break down objectives into SMART goals. SMART
            stands for specific, measurable, achievable, relevant, and timely.
            This approach helps you stay focused rather than drift off on
            flights of fancy.
          </p>
          <div className="flex flex-col gap-3 justify-center items-center font-inter font-medium">
            <ul>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Specific: Define your goals with precision. For example,
                  “increase online sales by 20% within the next year” or “reach
                  page 1 on Google.”
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Measurable: Ensure you can track your goals with metrics or
                  data points. Website analytics can be used to monitor traffic,
                  and internal sales tracking can be used to monitor revenue
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Achievable: There’s no point in saying, “We want to be Amazon
                  by the end of the year.” Your goals should be realistic and
                  attainable, given your resources and time frame.
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Relevant: Make sure your goals are aligned with your overall
                  business objectives and are essential to your success. A
                  fabulous website is meaningless if it doesn’t support your
                  growth
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Timely: Set deadlines for your goals to keep the project on
                  track and maintain momentum
                </span>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Engage with us */}

        <div className="flex flex-row items-center justify-between border shadow-lg shadow-gray-500/50 rounded-md px-4 py-3 gap-5">
          <div className="flex  flex-row gap-6 ">
            <button className="addButton w-[40px] h-[40px] rounded hover:bg-gray-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} style={{ color: "#000000" }} />
            </button>
            {/* <button className="w-[40px] h-[40px] rounded hover:bg-gray-300 flex items-center justify-center ">

            </button> */}
            <>
              {/* <FontAwesomeIcon icon={faComment} style={{color: "#000000",}} /> */}
            </>
          </div>
          <div>
            <button className="addButton w-[40px] h-[40px] rounded hover:bg-gray-300 flex items-center justify-center">
              <FontAwesomeIcon icon={faShare} style={{ color: "#000000" }} />
            </button>
          </div>
        </div>
        <Comment postSlug={slug} />


        {/* <div className="infoContainer flex flex-col items-start gap-5 ">
          <div className="textContainer flex-[1] font-medium w-fit text-xl md:text-3xl font-sora">
            <h1>Define Your Goals and Objectives</h1>
          </div>
          <p className="font-inter font-medium ">
            I find it helpful to break down objectives into SMART goals. SMART
            stands for specific, measurable, achievable, relevant, and timely.
            This approach helps you stay focused rather than drift off on
            flights of fancy.
          </p>
          <div className="flex flex-col gap-3 justify-center items-center font-inter font-medium">
            <ul>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Specific: Define your goals with precision. For example,
                  “increase online sales by 20% within the next year” or “reach
                  page 1 on Google.”
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Measurable: Ensure you can track your goals with metrics or
                  data points. Website analytics can be used to monitor traffic,
                  and internal sales tracking can be used to monitor revenue
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Achievable: There’s no point in saying, “We want to be Amazon
                  by the end of the year.” Your goals should be realistic and
                  attainable, given your resources and time frame.
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Relevant: Make sure your goals are aligned with your overall
                  business objectives and are essential to your success. A
                  fabulous website is meaningless if it doesn’t support your
                  growth
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Timely: Set deadlines for your goals to keep the project on
                  track and maintain momentum
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="infoContainer flex flex-col items-start  gap-5 ">
          <div className="textContainer flex-[1] font-medium w-fit text-xl md:text-3xl font-sora">
            <h1>Develop a Strategy and Stick to it</h1>
          </div>
          <div className="font-inter font-medium flex flex-col gap-2">
            <p>
              Based on your SMART goals, outline the strategies and actions
              needed to achieve them. This could involve improving website
              navigation for better UX (user experience), optimizing for SEO to
              increase visibility, or creating compelling content to engage
              visitors. In reality, it probably means all that and more.
            </p>
            <p>
              Monitor your project’s progress against your SMART goals. When you
              see yourself starting to diverge, it’s time to revisit the plan
            </p>
          </div>
        </div>

        <div className="infoContainer flex flex-col items-start gap-5">
          <div className="textContainer flex-[1] font-medium w-fit text-xl md:text-3xl font-sora">
            <h1>understand Your Audience and Your Competitors</h1>
          </div>
          <p className="font-inter font-medium">
            Understanding your audience is critical to designing a website that
            effectively meets their needs.
          </p>
        </div>

        <div className="infoContainer flex flex-col items-start gap-5">
          <div className="textContainer flex-[1] font-medium w-fit text-xl md:text-3xl font-sora ">
            <h1>Identify your Target Audience</h1>
          </div>
          <p className="font-inter font-medium">
            Determine who your primary website users will be. Consider age,
            gender, location, interests, education, and specific needs. Develop
            detailed personas for your typical users. Include information about
            their demographics, behaviors, motivations, and challenges. Personas
            should represent the different user types that will visit your
            website. Personas don’t replace testing with real users, but they’re
            an excellent place to start when you don’t have anything to test
            just yet.
          </p>
        </div>

        <div className="infoContainer flex flex-col items-start gap-5 ">
          <div className="textContainer flex-[1] font-medium w-fit text-xl md:text-3xl font-sora">
            <h1>Conduct Competitor Analysis</h1>
          </div>
          <p className="font-inter font-medium">
            Studying successful businesses in your field can sometimes tell you
            more about the market and how to succeed in it, as analyzing your
            customers..
          </p>
          <div className="flex flex-col gap-2 font-inter font-medium">
            <ul>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Research Competitors: Identify and review the websites of your
                  direct competitors.
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Analyze Their Websites: Note the strengths and weaknesses of
                  these websites. What style have they adopted? What design
                  elements do they use? What is the tone of voice of their
                  content? What functionality do they have? What are your
                  general impressions of the UX?
                </span>
              </li>
              <li className="flex flex-row gap-1">
                &#8226;
                <span>
                  Identify Differentiation Opportunities: Determine how your
                  website can stand out. Look for gaps in the market that your
                  website can fill and unique value propositions you can offer.
                  Using insights from your audience and competitor analysis,
                  decide on the key features and types of content your website
                  will offer. Prioritize these based on what will most
                  effectively meet your users’ needs and differentiate your site
                  in the market.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="infoContainer flex flex-col items-start  gap-5 ">
          <div className="textContainer flex-[1] font-medium w-fit text-xl md:text-3xl font-sora ">
            <h1>Conclusion</h1>
          </div>
          <div className="font-inter font-medium flex flex-col gap-2">
            <p>
              It’s easy to start a website, but starting a successful website
              that doesn’t chew through your budget is a little trickier. The
              process requires discipline to take the strategic steps necessary
              to create a website that aligns with your overall business goals.
            </p>
            <p>
              Start with a clear definition of goals. Use the SMART goals
              approach to set a strong foundation. Although you may need some
              flexibility throughout the project, starting with a formal
              structure will get you on the right foot.
            </p>
            <p>
              Understanding your audience and their needs is crucial in creating
              a website that they find helpful. Your site structure and
              technology stack should support delivering these insights. Get it
              right, and you’ll not only have new users but also retain old
              ones.
            </p>
            <p>
              And, of course, meticulous planning around timelines and budgets
              ensures nothing gets out of hand.
            </p>
            <p>
              This holistic approach ensures that your website looks appealing
              and effectively meets business goals and user needs
            </p>
          </div>
        </div> */}

        {/* <div className="flex flex-col items-center justify-center mt-10 gap-3">
          <h3 className="font-sora font-semibold">Engage With Us</h3>
          <div className="flex flex-row items-center justify-center bg-gray-200 rounded-full px-4 py-3 gap-5">
            <button className="addButton w-[36px] h-[36px] rounded hover:bg-gray-300 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faThumbsUp}
                color="green"
                className="text-lg"
              />
            </button>
            <button className="addButton w-[36px] h-[36px] rounded hover:bg-gray-300 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faComment}
                color="green"
                className="text-lg"
              />
            </button>
            <button className="addButton w-[36px] h-[36px] rounded hover:bg-gray-300 flex items-center justify-center">
              <FontAwesomeIcon
                icon={faShare}
                color="green"
                className="text-lg"
              />
            </button>
          </div>
        </div> */}
        {/* COMMENTS SECTIONS */}
        <div className="grid grid-col-2 ">{/* <CardList /> */}</div>
      </div>
    </>
  );
}

export default SinglePage;
