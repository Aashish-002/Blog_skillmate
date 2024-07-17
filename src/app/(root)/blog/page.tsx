import CardList from "@/components/cardList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import LandingPage from "@/components/landingPage/LandingPage";
import Menu from "@/components/menu/Menu";

export default function Page({searchParams}: {searchParams: any}) {
  const page = parseInt(searchParams.page) || 1;

  const {cat} = searchParams

  return (
    <>
      <div className="">
        <LandingPage />
        {/* <CategoryList /> */}
        <div className="flex gap-[50px]">
          <CardList page={page} cat={cat}  />
          <Menu />
        </div>
      </div>
    </>
  );
}
