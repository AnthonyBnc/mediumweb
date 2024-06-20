import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import MGrid from "./MGrid";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default async function Home() {
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
              <Link href="/OurStory" className="transition-all hover:underline">
                Our story
              </Link>
              <Link href="#" className="transition-all hover:underline">
                Membership
              </Link>
              <Link href="/write" className="transition-all hover:underline">
                Write
              </Link>
              <ClerkProvider>
                <div className="transition-all hover:underline">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </ClerkProvider>
            </div>
            <Link
              href="#"
              className="mx-2 rounded-full bg-black px-4 py-2 text-white"
            >
              Get started
            </Link>
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
              <Link href="/Blog">Start Reading</Link>
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 mt-10 h-full w-full select-none flex-col items-center overflow-hidden md:w-1/2">
          <MGrid />
        </div>
      </main>

      <footer className="flex h-16 items-center justify-center bg-white text-sm text-gray-500">
        <nav>
          <Link href="#" className="mx-2">
            Help
          </Link>
          <Link href="#" className="mx-2">
            Status
          </Link>
          <Link href="#" className="mx-2">
            About
          </Link>
          <Link href="#" className="mx-2">
            Careers
          </Link>
          <Link href="#" className="mx-2">
            Press
          </Link>
          <Link href="#" className="mx-2">
            Blog
          </Link>
          <Link href="#" className="mx-2">
            Privacy
          </Link>
          <Link href="#" className="mx-2">
            Terms
          </Link>
          <Link href="#" className="mx-2">
            Text to speech
          </Link>
          <Link href="#" className="mx-2">
            Teams
          </Link>
        </nav>
      </footer>
    </div>
  );
}
