"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function LoginPage({}: Props) {
  const { data: session, status } = useSession();
  const router = useRouter();
  // console.log(session, status);

  if (status === "loading") {
    return <div className="loading">Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-40 p-4">
      <div className="w-full max-w-xl border border-black rounded-lg shadow-lg p-8">
        <div className="flex flex-col gap-4 items-center justify-center mb-10">
          <Image
            className=""
            src={"/images/skillmate.svg"}
            alt="skillmate logo"
            width={250}
            height={250}
          />
          <p className="font-bold text-lg text-center">
            Where genuine skills meet great opportunities
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
          <button
            onClick={() => signIn("google")}
            className="border border-black p-4 rounded-md flex items-center justify-center transition duration-300 hover:bg-white hover:text-[#0dba4b] focus:outline-none"
          >
            <Image
              width={50}
              height={50}
              src={"/images/google.svg"}
              alt="Google Login"
              className="h-6 w-6 mr-2"
            />
            <p>Google</p>
          </button>
          <button
            onClick={() => signIn("github")}
            className="border border-black p-4 rounded-md flex items-center justify-center transition duration-300 hover:bg-white hover:text-[#0dba4b] focus:outline-none"
          >
            <Image
              width={25}
              height={25}
              src={"/images/github.svg"}
              alt="Github Login"
              className="h-6 w-6 mr-2"
            />
            <p>Github</p>
          </button>
        </div>
        <footer className="mt-4 text-center">
          <h1 className="font-normal text-xl">Sign in to Continue</h1>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
