"use client";
import React from "react";
import Link from "next/link";

import { Icons } from "./Icons";
import AuthForm from "./AuthForm";

const SignUp = () => {
  return (
    <div className="container mx-auto flex -w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-8 w-8" color="orange" />
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <p className="text-sm max-w-xs mx-auto">
          Create an account and start posting, liking and sharing!
        </p>

        <AuthForm className="" />

        <p className="px-8 text-center text-sm text-zinc-700">
          Already has an account?{" "}
          <Link
            href="/sign-in"
            className="hover:text-zinc-800 text-sm underline underline-offset-4"
          >
            Sign-In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
