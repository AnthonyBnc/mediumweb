import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

import NavBar from "../_components/Blogpage/NavBar";
import BlogList from "../_components/shared/BlogList";
import Header from "../_components/shared/HeaderBar";
import SideBar from "../_components/Blogpage/SideBar";

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

            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
