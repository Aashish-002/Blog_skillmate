import CardList from "@/components/cardList/CardList";
import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/landingPage/LandingPage";
import Menu from "@/components/menu/Menu";
import Link from "next/link";
import TermsandConditions from "@/components/Terms/Termsandconditions";
import Header from "@/components/header/Header";
import CategoryList from "@/components/categoryList/CategoryList";
import { Suspense } from "react";

import { ImSpinner2, ImSpinner9 } from "react-icons/im";

export default function Home({ searchParams }: { searchParams: any }) {
  // pagination
  const page = parseInt(searchParams.page) || 1;

  return (
    <>
      <LandingPage />
      {/* <Suspense fallback={<FaSpinner className="animate-spin" />}>
        <CategoryList />
      </Suspense> */}
      {/* Make two columns */}
      <div className="flex gap-[50px] mx-[20px] my-[50px]">
        <div className="flex-2 mr-[40px]">
          <CardList page={page} cat={undefined} />
        </div>
        <div className="flex-1 -ml-[3rem]">
            <Menu />
        </div>
      </div>
    </>
  );
}
