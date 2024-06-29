"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import MGrid from "./landingpage/MGrid";
import FooterBar from "./shared/Footer";
import { useSession } from "next-auth/react";

export default function HomeSection() {
  const { data: session } = useSession();
  return (
    <div className="flex h-screen flex-col bg-[#FFC017]">
      <div className="border-b border-black">
        <header className="mx-auto flex h-[75px] w-full max-w-7xl  items-center justify-between bg-[#FFC017] p-5">
          <button>
            <div className="text-3x1 font-bold">
              <Image
                src="/mediumlogo.png"
                alt="Medium Logo"
                width={200}
                height={35}
              />
            </div>
          </button>
          <nav className="flex items-center gap-4 text-sm font-medium tracking-tight">
            <div className="hidden gap-6 md:flex">
              <button className="transition-all hover:underline">
                <a href="/ourstory">Our story</a>
              </button>
              <button className="transition-all hover:underline">
                Membership
              </button>
              <button className="transition-all hover:underline">
                <a href="/SignInPage">Write</a>
              </button>

              <button className="transition-all hover:underline">
                <a href="/SignInPage">Sign In</a>
              </button>
            </div>
            <button className="mx-2 rounded-full bg-black px-4 py-2 text-white">
              <a href="/SignInPage">Get started</a>
            </button>
          </nav>
        </header>
      </div>

      <main className="relative flex flex-1 flex-col justify-center overflow-hidden border-b-2 border-black bg-[#FFC017]">
        <div className="z-30 mx-auto flex w-full max-w-7xl">
          <div className="inline-block w-full bg-[#FFC017] p-5 md:w-2/3 lg:w-1/2">
            <h1 className=" w-fit text-nowrap py-3 font-serif text-7xl md:text-7xl lg:text-8xl">
              Stay curious.
            </h1>
            <p className="mt-4 w-5/6 text-xl leading-6 tracking-tight">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button className="mt-10 rounded-3xl bg-black px-10 py-2 text-center text-xl font-light text-white">
              <a href="/SignInPage">Start Reading</a>
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 mt-10 h-full w-full select-none flex-col items-center overflow-hidden md:w-1/2">
          <MGrid />
        </div>
      </main>
      <FooterBar />
    </div>
  );
}
