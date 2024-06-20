import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import NavBar from "./NavBar";
import BlogList from "./BlogList";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Blog = () => {
  return (
    <>
      <ClerkProvider>
        <Head>
          <title>Blog - Medium</title>
        </Head>

        <header className="flex items-center justify-between border-b p-4">
          <div className="flex items-center">
            <Link href="/..">
              <Image
                src="/mediumlogo.png"
                alt="Medium Logo"
                width={200}
                height={35}
              />
            </Link>
            <div className="relative ml-5">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                {/*Search Icon*/}
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="defaul-search"
                className="block w-full rounded-full border bg-white p-2 ps-10 text-sm text-gray-900 dark:text-gray-900 dark:placeholder-gray-400"
                placeholder="Search"
                required
              />
            </div>
          </div>

          <div className="flex space-x-9">
            <div>
              <button className="flex items-center">
                <div className="s flex space-x-3 font-sans text-gray-700 hover:text-gray-900">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3515 20.8218L10.4109 22.0711L11.5676 15.038L24.8242 1.8277C25.0393 1.61085 25.2951 1.43874 25.5771 1.32128C25.859 1.20383 26.1614 1.14336 26.4668 1.14336C26.7722 1.14336 27.0746 1.20383 27.3565 1.32128C27.6384 1.43874 27.8943 1.61085 28.1094 1.8277L30.5617 4.28004C30.7786 4.49512 30.9507 4.751 31.0682 5.03292C31.1856 5.31485 31.2461 5.61724 31.2461 5.92265C31.2461 6.22807 31.1856 6.53046 31.0682 6.81238C30.9507 7.09431 30.7786 7.35019 30.5617 7.56526L17.3515 20.8218Z"
                      stroke="#000001"
                      strokeWidth="2.31353"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.7624 21.9786V28.9192C27.7624 29.5328 27.5186 30.1212 27.0848 30.5551C26.6509 30.989 26.0624 31.2327 25.4489 31.2327H3.47027C2.85669 31.2327 2.26823 30.989 1.83436 30.5551C1.40049 30.1212 1.15674 29.5328 1.15674 28.9192V6.94061C1.15674 6.32702 1.40049 5.73857 1.83436 5.30469C2.26823 4.87082 2.85669 4.62708 3.47027 4.62708H10.4109"
                      stroke="#000001"
                      strokeWidth="2.31353"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Write</span>
                </div>
              </button>
            </div>

            <div>
              <button className="text-gray-700 hover:text-gray-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.616 34.0006V20.2562C27.616 17.3212 26.7927 14.8873 25.1463 12.9545C23.4998 10.9501 21.2807 9.94793 18.4888 9.94793C15.697 9.94793 13.4778 10.9501 11.8314 12.9545C10.1849 14.8873 9.36167 17.3212 9.36167 20.2562V34.0006H27.616ZM32.2332 31.6383L36.8505 36.2556V38.5105H0.127147V36.2556L4.74441 31.6383V20.2562C4.74441 16.677 5.63923 13.563 7.42886 10.9143C9.29009 8.26567 11.8314 6.54762 15.0527 5.76018V4.14951C15.0527 3.2189 15.3749 2.43146 16.0191 1.78719C16.6634 1.07133 17.4866 0.713406 18.4888 0.713406C19.491 0.713406 20.3142 1.07133 20.9585 1.78719C21.6028 2.43146 21.9249 3.2189 21.9249 4.14951V5.76018C25.1463 6.54762 27.6518 8.26567 29.4414 10.9143C31.3026 13.563 32.2332 16.677 32.2332 20.2562V31.6383ZM21.7102 44.0942C20.7796 44.9532 19.7058 45.3827 18.4888 45.3827C17.2719 45.3827 16.1981 44.9532 15.2675 44.0942C14.3369 43.1636 13.8716 42.0898 13.8716 40.8729H23.1061C23.1061 42.0898 22.6408 43.1636 21.7102 44.0942Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            <div className="transition-all hover:underline">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </header>

        <div className="mb-10">
          <div className="mt-10 px-5 lg:container md:px-10 lg:mx-auto lg:max-w-7xl">
            <div className="grid w-full grid-cols-12 gap-5 lg:gap-10">
              <div className="col-span-12 flex flex-col gap-10 md:col-span-8">
                <div>
                  <NavBar />
                </div>
                <div>
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
                    A Third of My Online College Students are AI-Powered
                    Spambots
                  </p>
                </div>
                <div className="mt-2 flex flex-col">
                  <a className="text-sm font-light text-black">Evan Sharp</a>
                  <p className="text-lg hover:underline">
                    The Soul of Pinterest
                  </p>
                </div>
                <div className="border-b border-gray-200">
                  <a
                    className="text-sm text-green-600 hover:text-blue-500"
                    href="#"
                  >
                    See the full list
                  </a>
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
                  <a
                    className="text-sm text-green-600 hover:text-blue-500"
                    href="#"
                  >
                    See more topics
                  </a>
                </div>
                <div className="mt-5 hidden flex-wrap gap-x-5 gap-y-2 text-sm font-light text-gray-500 md:flex">
                  <a className="hover:text-blue-500" href="#">
                    Help
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    Status
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    About
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    Careers
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    Blog
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    Privacy
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    Terms
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    Text to speech
                  </a>
                  <a className="hover:text-blue-500" href="#">
                    Teams
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClerkProvider>
    </>
  );
};

export default Blog;
