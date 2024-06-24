import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import NavBar from "../_components/Blogpage/NavBar";
import BlogList from "../_components/shared/BlogList";
import Header from "../_components/shared/HeaderBar";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog - Medium</title>
      </Head>

      <Header />

      <div className="mb-10">
        <div className="mt-10 px-5 lg:container md:px-10 lg:mx-auto lg:max-w-7xl">
          <div className="grid w-full grid-cols-12 gap-5 lg:gap-10">
            <div className="col-span-12 flex flex-col gap-10 md:col-span-8">
              <div>
                <NavBar />
              </div>
              <div className="flex flex-col gap-3">
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
              </div>
            </div>

            {/*Addition table contents*/}
            <div className="order-first col-span-12 md:sticky md:top-10 md:order-last md:col-span-4 md:self-start">
              <div className="font-semibold">Staff Picks</div>
              <div className="mt-2 flex flex-col">
                <a className="text-sm font-light text-black">
                  Tony Stubblebine
                </a>
                <p className="text-lg hover:underline">
                  Be part of a better internet
                </p>
              </div>
              <div className="mt-2 flex flex-col">
                <a className="text-sm font-light text-black">Mary Rose</a>
                <p className="text-lg hover:underline">
                  A Third of My Online College Students are AI-Powered Spambots
                </p>
              </div>
              <div className="mt-2 flex flex-col">
                <a className="text-sm font-light text-black">Evan Sharp</a>
                <p className="text-lg hover:underline">The Soul of Pinterest</p>
              </div>
              <div className="border-b border-gray-200">
                <Link
                  className="text-sm text-green-600 hover:text-blue-500"
                  href="#"
                >
                  See the full list
                </Link>
              </div>
              <div className="mt-2 font-semibold">Recommened Topic</div>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-2 text-sm font-light text-black">
                <a className="rounded-3xl bg-gray-100 p-3">Equality</a>
                <a className="rounded-3xl bg-gray-100 p-3">Bitcoin</a>
                <a className="rounded-3xl bg-gray-100 p-3">IOS</a>
                <a className="rounded-3xl bg-gray-100 p-3">Cybersecurity</a>
                <a className="rounded-3xl bg-gray-100 p-3">Future</a>
                <a className="rounded-3xl bg-gray-100 p-3">Nonfiction</a>
                <a className="rounded-3xl bg-gray-100 p-3">True Crime</a>
              </div>
              <div className="border-b border-gray-200 py-5">
                <Link
                  className="text-sm text-green-600 hover:text-blue-500"
                  href="#"
                >
                  See more topics
                </Link>
              </div>
              <div className="mt-5 hidden flex-wrap gap-x-5 gap-y-2 text-sm font-light text-gray-500 md:flex">
                <Link className="hover:text-blue-500" href="#">
                  Help
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  Status
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  About
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  Careers
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  Blog
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  Privacy
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  Terms
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  Text to speech
                </Link>
                <Link className="hover:text-blue-500" href="#">
                  Teams
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
