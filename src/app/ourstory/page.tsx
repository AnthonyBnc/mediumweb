import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

const OurStory = () => {
  return (
    <>
      <Head>
        <title>Our Story - Medium</title>
      </Head>

      <div className="min-h-screen bg-[#242424] text-white">
        <header className="flex items-center justify-between border-b p-5">
          <div className="flex items-center">
            <Link href="/..">
              <Image
                src="/mediumwhite.png"
                alt="Medium Logo"
                width={200}
                height={35}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="rounded-full border px-4 py-2 text-white">
              Sign in
            </Link>
            <Link
              href="#"
              className="rounded-full bg-white px-4 py-2 text-black"
            >
              Sign up
            </Link>
          </div>
        </header>

        <main className="relative flex flex-col px-4 py-16">
          <div className="font-serif-pro mb-8 max-w-2xl p-5 text-xl lg:w-1/2">
            <h1 className="font-georgia text-6xl md:text-5xl lg:text-7xl">
              Everyone has a story to tell.
            </h1>
            <div className="mt-6 space-y-5 text-lg md:text-xl lg:text-2xl">
              <p>
                Medium is a home for human stories and ideas. Here, anyone can
                share insightful perspectives, useful knowledge, and life wisdom
                with the world—without building a mailing list or a following
                first. The internet is noisy and chaotic; Medium is quiet yet
                full of insight. It’s simple, beautiful, collaborative, and
                helps you find the right audience for whatever you have to say.
              </p>
              <p>
                We believe that what you read and write matters. Words can
                divide or empower us, inspire or discourage us. In a world where
                the most sensational and surface-level stories often win, we’re
                building a system that rewards depth, nuance, and time well
                spent. A space for thoughtful conversation more than drive-by
                takes, and substance over packaging.
              </p>
              <span className="px-1 font-sans text-4xl text-white">
                <p>
                  Ultimately, our goal is to deepen our collective understanding
                  of the world through the power of writing.
                </p>
              </span>
              <p>
                Over 100 million people connect and share their wisdom on Medium
                every month. Many are professional writers, but just as many
                aren’t — they’re CEOs, computer scientists, U.S. presidents,
                amateur novelists, and anyone burning with a story they need to
                get out into the world. They write about what they’re working
                on, what’s keeping them up at night, what they’ve lived through,
                and what they’ve learned that the rest of us might want to know
                too.
              </p>
              <p>
                Instead of selling ads or selling your data, we’re supported by
                a growing community of{" "}
                <Link href="#" className="underline">
                  Medium members
                </Link>{" "}
                who align with our mission. If you’re new here,{" "}
                <Link href="/.." className="underline">
                  start exploring
                </Link>
                . Dive deeper into whatever matters to you. Find a post that
                helps you learn something new, or reconsider something
                familiar—and then{" "}
                <Link href="#" className="underline">
                  share your own story
                </Link>
                .
              </p>
            </div>
          </div>
        </main>

        <div className="flex flex-col items-center">
          <div className="min-h-[200px] w-full border-b border-t border-white p-16 text-center text-6xl text-white transition-colors duration-300 hover:bg-white hover:text-black">
            <Link href="#" className="flex items-center justify-between">
              <span>Start reading</span>
              <span className="ml-auto text-3xl">→</span>
            </Link>
          </div>
          <div className="min-h-[200px] w-full border-b border-t border-white p-16 text-center text-6xl text-white transition-colors duration-300 hover:bg-white hover:text-black">
            <Link href="#" className="flex items-center justify-between">
              <span>Start writing</span>
              <span className="ml-auto text-3xl">→</span>
            </Link>
          </div>
          <div className="min-h-[200px] w-full border-b border-t border-white p-16 text-center text-6xl text-white transition-colors duration-300 hover:bg-white hover:text-black">
            <Link href="#" className="flex items-center justify-between">
              <span>Become a member</span>
              <span className="ml-auto text-3xl">→</span>
            </Link>
          </div>
        </div>

        <footer className="flex items-center justify-between border-t bg-white px-8 py-5">
          <div className="flex items-center">
            <Link href="/..">
              <Image
                src="/mediumlogo.png"
                alt="Medium Logo"
                width={200}
                height={35}
              />
            </Link>
          </div>
          <div className="ml-auto flex space-x-4 text-black underline">
            <Link href="#">About</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Help</Link>
            <Link href="#">Teams</Link>
            <Link href="#">Press</Link>
          </div>
          <div></div>
        </footer>
      </div>
    </>
  );
};

export default OurStory;
