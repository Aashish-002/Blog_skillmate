import Image from "next/image";
import Card from "../card/Card";
import CardData from "../featured/cardData";
import Pagination from "../pagination/Pagination";

// type CardDataType = {
//   id: number;
//   slug: string;
//   title: string;
//   desc: string;
//   imageUrl: string;
//   category: string;
//   post: string;
//   comments: string;
//   createdAt: string;
//   updatedAt: string;
// }
const getData = async (page: number, cat: string | undefined) => {
  const res = await fetch(`${process.env.API}/api/posts?page=${page}&cat=${cat || ''}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Request Failed");
  }
  
  return res.json();
};


async function CardList ({page, cat}: {page: number, cat: string | undefined }){

  const {posts, count} = await getData(page, cat)

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  // calculate If we have more items or not based on current page
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;


  
  return (
    <div className="flex-[5]">
      <h1 id="latest" className="title text-2xl font-semibold my-[50px] mx-0">
        Latest Posts
      </h1>
      <div className="posts">
        {
         posts?.map((item: any ) => {
            return <Card key={item._id} item={item} />
            
          })
        }
      </div>
      {/* <div className=" text-black  font-bold text-2xl mb-6 ml-10">
        Latest Posts
      </div>
      <div className="Posts mb-24">
        <div className="post">
        {CardData.map((item)=>(
          <Card
            item={item}
            key={item.id}      
          />
        ))}
         
        </div>
      </div> */}
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
