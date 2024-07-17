"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const AdminLoginPage: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("")
  const { data: session, status } = useSession();
  const router = useRouter();

  const successToast = (message: string) => {
    toast.success(message, {
      position: "top-center",
    });
  };

  const errorToast = (message: string) => {
    toast.error(message, {
      position: "top-center",
    });
  };
  const handleReset = () => {
    setEmail("")
    setPassword('')
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let regex = /@skillmate\.ai/i
    
    console.log(regex.test(email));

    if(!regex.test(email)){
      toast(`${email} not allowed`, {position: "top-right"
      })
      handleReset()
      return
    }

    const result = await signIn("credentials", {
      email,
      password,
      // next-auth tries to redirect somewhere
      redirect: false, 
    });

    if (result?.error) {
      errorToast("Wrong email or password");
    } else {
      successToast("Welcome admin");
      router.push("/myblog");
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  if (status === "authenticated" && session.user.role === "ADMIN") {
    router.push("/myblog");
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 bg-gradient-to-r from-[#14cc1d] to-[#f0f0f1]">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <Toaster />
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label
              htmlFor="email"
              className="block text-xs font-medium uppercase text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full my-1 py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:border-green-500"
              placeholder="admin@skillmate.ai"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="password"
              className="block text-xs font-medium uppercase text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full my-1 py-2 px-3 border border-gray-400 rounded-md focus:outline-none focus:border-green-500"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          >
            Login
          </button>
        </form>
        <div className="flex justify-center items-center mt-4">
          <p className="text-sm text-gray-600">Are you a user?</p>
          <Link href="/" className="text-sm text-red-600 ml-1">
            Go to User Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
