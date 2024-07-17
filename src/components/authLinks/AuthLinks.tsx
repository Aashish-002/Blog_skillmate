"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { ImSpinner2 } from 'react-icons/im'

type Props = {};

const AuthLinks = (props: Props) => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  if (status === "loading") {
    return (
      <div className="loading">
        <ImSpinner2 className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      {status === "unauthenticated" ? (
        <Link
          href={"/login"}
          className="py-2 border border-brandgreen px-4 rounded-full cursor-pointer hover:bg-brandgreen hover:border-white hover:text-white"
        >
          Login
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          {session?.user.role === "ADMIN" && (
            <>
              <Link href={"/myblog"} className="hidden md:inline">
                My Blog
              </Link>
              <Link
                href={"/write"}
                className="hidden md:inline py-2 bg-[#0DBA4B] border border-brandgreen text-white px-4 rounded-full cursor-pointer hover:bg-brandgreen hover:border-white"
              >
                Write
              </Link>
            </>
          )}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={" "}
              onClick={() => signOut()}
              className="py-2 border border-red-500 px-4 rounded-full cursor-pointer hover:bg-red-500 hover:text-white"
            >
              Logout
            </Link>
            {session?.user.image && (
              <Image
                src={session.user.image}
                alt="Profile Picture"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </div>
        </div>
      )}

      {/* MOBILE VIEW */}
      <div className="md:hidden flex items-center gap-4">
        {status === "unauthenticated" ? (
          <Link
            href={"/login"}
            className="py-2 border border-brandgreen px-4 rounded-full cursor-pointer hover:bg-brandgreen hover:border-white hover:text-white"
          >
            Login
          </Link>
        ) : (
          <>
            {session?.user.image && (
              <Image
                src={session.user.image}
                alt="Profile Picture"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <div
              className="burger w-5 h-4 flex flex-col justify-between cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="line w-full h-[2px] bg-black"></div>
              <div className="line w-full h-[2px] bg-black"></div>
              <div className="line w-full h-[2px] bg-black"></div>
            </div>
          </>
        )}
      </div>

      {open && (
        <div className="md:hidden mobile-menu absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4">
          {status === "unauthenticated" ? (
            <Link
              href={"/login"}
              className="block py-2 border border-brandgreen px-4 rounded-full cursor-pointer hover:bg-brandgreen hover:border-white hover:text-white"
            >
              Login
            </Link>
          ) : (
            <>
              {session?.user.role === "ADMIN" && (
                <>
                  <Link href={"/myblog"}>My Blog</Link>
                  <Link
                    href={"/write"}
                    className="block py-2 bg-[#0DBA4B] border border-brandgreen text-white px-4 rounded-full cursor-pointer hover:bg-brandgreen hover:border-white"
                  >
                    Write
                  </Link>
                </>
              )}
              <Link
                href={" "}
                onClick={() => signOut()}
                className="block py-2 border border-red-500 px-4 rounded-full cursor-pointer hover:bg-red-500 hover:text-white"
              >
                Logout
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
