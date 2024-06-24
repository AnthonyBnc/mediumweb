import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import BlogList from "../_components/shared/BlogList";
import FooterBar from "../_components/shared/Footer";
import Header from "../_components/shared/HeaderBar";

const Post = () => {
  return (
    <>
      <Head>
        <title>This Guy Maked $1M+ per Year With 0 Employees</title>
      </Head>

      <Header />

      <div className="container mx-auto max-w-3xl px-5">
        <div className="mt-7">
          <h1 className="text-4xl font-bold">
            This Guy Makes $1M+ per Year With 0 Employees
          </h1>
          <p className="mt-2 text-xl text-gray-500">
            Ivan Kutskir — the world’s most underrated solopreneur
          </p>
        </div>
        <div className="mt-7">
          <div className="flex gap-8">
            <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
            <div>
              <div>
                Uzman Ali
                <a className="text-green-600 "> - Follow</a>
              </div>
              <div className="text-sm font-light text-gray-500">
                6 mins read . May 11,2024
              </div>
            </div>
          </div>

          <div className="mt-10 border-b border-t border-gray-200">
            <div className="flex justify-between py-3 text-sm font-light text-gray-500">
              <div className="flex justify-start gap-5">
                <button className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/200/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentcolor"
                    className="h-4 w-4 self-center"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.4002 0.14491C13.623 0.559986 14.4594 1.89959 14.1877 3.18919L13.6919 6.362C13.673 6.50087 13.7138 6.57745 13.7499 6.61833C13.7917 6.66574 13.8602 6.70204 13.95 6.70204H17.95C18.9029 6.70204 19.7427 7.08848 20.2538 7.78214C20.7666 8.47815 20.8795 9.39063 20.5597 10.2948L18.1704 17.5623C17.9645 18.3525 17.447 19.0062 16.8304 19.4573C16.207 19.9135 15.4298 20.202 14.65 20.202H10.85C10.4776 20.202 10.0333 20.1416 9.61896 20.0232C9.23819 19.9144 8.78894 19.7305 8.45859 19.4201L5.39087 17.0451L6.30913 15.859L9.44672 18.2881L9.48033 18.3217C9.54698 18.3884 9.727 18.494 10.031 18.5809C10.3167 18.6625 10.6224 18.702 10.85 18.702H14.65C15.0702 18.702 15.543 18.5406 15.9446 18.2468C16.3457 17.9533 16.6231 17.5672 16.7224 17.1701L16.729 17.1437L19.1405 9.80876L19.1437 9.79979C19.3197 9.30705 19.2316 8.92349 19.0462 8.67194C18.8573 8.41561 18.4971 8.20204 17.95 8.20204H13.95C12.9067 8.20204 12.0412 7.31064 12.2075 6.14598L12.2089 6.13625L12.7127 2.91266L12.7179 2.88935C12.8285 2.39133 12.4749 1.7509 11.9128 1.56356L11.8997 1.55917L11.8867 1.55429C11.6837 1.47817 11.4169 1.47992 11.1438 1.57381C10.8656 1.66943 10.6649 1.83174 10.574 1.96807L10.5725 1.97042L6.47247 8.07042L5.22754 7.23367L9.32596 1.13602C9.32626 1.13558 9.32655 1.13513 9.32685 1.13469C9.63603 0.671703 10.1349 0.334485 10.6562 0.155279C11.1792 -0.0245053 11.807 -0.0733724 12.4002 0.14491Z"
                      fill="#292D32"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.73371 5.72815C1.63499 5.81927 1.5 6.03656 1.5 6.65204V16.452C1.5 17.0675 1.63499 17.2848 1.73371 17.3759C1.84716 17.4807 2.10748 17.602 2.75 17.602H3.75C4.39252 17.602 4.65284 17.4807 4.76629 17.3759C4.86501 17.2848 5 17.0675 5 16.452V6.65204C5 6.03656 4.86501 5.81927 4.76629 5.72815C4.65284 5.62342 4.39252 5.50204 3.75 5.50204H2.75C2.10748 5.50204 1.84716 5.62342 1.73371 5.72815ZM0.71629 4.62594C1.25284 4.13067 1.99252 4.00204 2.75 4.00204H3.75C4.50748 4.00204 5.24716 4.13067 5.78371 4.62594C6.33499 5.13482 6.5 5.86753 6.5 6.65204V16.452C6.5 17.2366 6.33499 17.9693 5.78371 18.4781C5.24716 18.9734 4.50748 19.102 3.75 19.102H2.75C1.99252 19.102 1.25284 18.9734 0.71629 18.4781C0.165005 17.9693 0 17.2366 0 16.452V6.65204C0 5.86753 0.165005 5.13482 0.71629 4.62594Z"
                      fill="#292D32"
                    />
                  </svg>{" "}
                  2.7k
                </button>

                <button className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/200/svg"
                    fill="none"
                    viewBox="0 0 35 40 "
                    strokeWidth={1.5}
                    stroke="currentcolor"
                    className="h-4 w-4 self-center"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.51433 0H29.8277C34.6828 0.166636 38.4884 4.22932 38.3377 9.08501V21.5817C38.4098 23.9268 37.5443 26.2039 35.9327 27.909C34.3212 29.6142 32.0964 30.6066 29.751 30.6667H11.5043C10.2416 30.6928 9.04413 31.2327 8.18849 32.1617L3.64599 37.0109C3.26115 37.4306 2.72039 37.6733 2.15099 37.6817C1.56292 37.6667 1.00524 37.4173 0.60206 36.9889C0.198885 36.5605 -0.0163259 35.9888 0.00432626 35.4009V9.08501C-0.146385 4.22932 3.65916 0.166636 8.51433 0ZM29.8276 27.7917C33.0954 27.6264 35.6146 24.8502 35.4627 21.5817V9.08501C35.6146 5.81655 33.0954 3.04035 29.8276 2.875H8.51432C5.24652 3.04035 2.72737 5.81655 2.87932 9.08501V33.6184L6.00349 30.2067C7.43221 28.6869 9.41853 27.8149 11.5043 27.7917H29.8276Z"
                      fill="black"
                    />
                  </svg>
                  40
                </button>
              </div>
              <div className="flex justify-end gap-5 text-gray-400">
                <button className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/200/svg"
                    fill="none"
                    viewBox="0 0 20 20 "
                    strokeWidth={1.5}
                    stroke="currentcolor"
                    className="h-4 w-4 self-center"
                  >
                    <path
                      d="M8 15L1 19V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V19L8 15Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/200/svg"
                    fill="none"
                    viewBox="0 0 20 20 "
                    strokeWidth={1.5}
                    stroke="currentcolor"
                    className="h-4 w-4 self-center"
                  >
                    <path
                      d="M17 13V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 1.35597L6.5 7.92597H9.5C9.27 12.536 5 14.986 5 14.986C9.4 14.986 13.79 13.276 14 7.92597H17L12.53 1.35597C12.4361 1.24447 12.319 1.15484 12.1869 1.09335C12.0547 1.03186 11.9108 1 11.765 1C11.6193 1 11.4753 1.03186 11.3431 1.09335C11.211 1.15484 11.0939 1.24447 11 1.35597Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-lg md:prose-normal container mx-auto mt-10 max-w-3xl px-5 font-serif">
        <figure>
          <img
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*9NgeeT9cQaCXISOIhmh7zw.png"
            className="w-full"
          />
        </figure>
        <div className="container mx-auto max-w-2xl px-5">
          <div className="mt-10">
            <p className="text-lg">
              Have you ever heard of Photopea, a FREE Photoshop-like image
              editor?
            </p>
            <p className="mt-4 text-lg">
              Yes, the genius behind it is <b>Ivan Kutskir</b>. This project of
              his gets:
            </p>
            <ul className="mt-4 list-inside list-disc text-lg">
              <li>13M monthly visits</li>
              <li>1.5M monthly user hours</li>
              <li>$100K monthly ad revenue</li>
            </ul>
            <p className="mt-4 text-lg">
              Amazingly, he solo-handled 500K daily users and scaled Photopea to
              $1M+ in revenue and he spends only $700/year for maintenance &
              keeps ALL the profit for himself.
            </p>
            <p className="mt-4 text-lg">Let’s get into his story.</p>
            <blockquote className="mt-4 border-l-4 border-gray-300 pl-4 text-lg italic">
              Just a quick reminder, here is a{" "}
              <Link
                href="https://medium.com/@uzmanali/list/founders-stories-bebf56325503"
                className="text-blue-600 underline"
              >
                link to my Medium list
              </Link>{" "}
              which includes all founder stories I have written to this date.
              Thanks
            </blockquote>
          </div>
        </div>
        <figure className="mt-8">
          <img
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*B3KhTbJYwP92zAMYPe4B0g.png"
            className="w-full"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-600">
            Photopea growth index
          </figcaption>
        </figure>
        <h2 className="mt-8 text-2xl font-bold">How this all started</h2>
        <p className="mt-4 text-lg">
          Born in a small village in western Ukraine, his family moved to the
          Czech Republic in 2001. At 11, he got his first computer, and since
          then he has been fascinated with computer graphics. At 14, he built
          his first website and with time constructed 12 more.
        </p>
      </div>

      <div className=" mt-5 flex flex-col items-center justify-center bg-[#FFC017] py-20 text-center">
        <div className="justify-center">
          <h1 className="text-2xl">Be a part of a better iternet.</h1>
          <p className="mt-2 font-sans text-2xl font-bold">
            Get 20% off meembership for a limited time.
          </p>
          <button className="mt-5 rounded-full bg-black px-6 py-3 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50">
            Subcribe
          </button>
        </div>
      </div>

      <div className="prose prose-lg md:prose-normal container mx-auto mt-10 max-w-3xl px-5 font-serif">
        <div className="mt-10">
          <div className="flex justify-between py-3 text-sm font-light text-gray-500">
            <div className="flex justify-start gap-5">
              <button className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/200/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentcolor"
                  className="h-4 w-4 self-center"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.4002 0.14491C13.623 0.559986 14.4594 1.89959 14.1877 3.18919L13.6919 6.362C13.673 6.50087 13.7138 6.57745 13.7499 6.61833C13.7917 6.66574 13.8602 6.70204 13.95 6.70204H17.95C18.9029 6.70204 19.7427 7.08848 20.2538 7.78214C20.7666 8.47815 20.8795 9.39063 20.5597 10.2948L18.1704 17.5623C17.9645 18.3525 17.447 19.0062 16.8304 19.4573C16.207 19.9135 15.4298 20.202 14.65 20.202H10.85C10.4776 20.202 10.0333 20.1416 9.61896 20.0232C9.23819 19.9144 8.78894 19.7305 8.45859 19.4201L5.39087 17.0451L6.30913 15.859L9.44672 18.2881L9.48033 18.3217C9.54698 18.3884 9.727 18.494 10.031 18.5809C10.3167 18.6625 10.6224 18.702 10.85 18.702H14.65C15.0702 18.702 15.543 18.5406 15.9446 18.2468C16.3457 17.9533 16.6231 17.5672 16.7224 17.1701L16.729 17.1437L19.1405 9.80876L19.1437 9.79979C19.3197 9.30705 19.2316 8.92349 19.0462 8.67194C18.8573 8.41561 18.4971 8.20204 17.95 8.20204H13.95C12.9067 8.20204 12.0412 7.31064 12.2075 6.14598L12.2089 6.13625L12.7127 2.91266L12.7179 2.88935C12.8285 2.39133 12.4749 1.7509 11.9128 1.56356L11.8997 1.55917L11.8867 1.55429C11.6837 1.47817 11.4169 1.47992 11.1438 1.57381C10.8656 1.66943 10.6649 1.83174 10.574 1.96807L10.5725 1.97042L6.47247 8.07042L5.22754 7.23367L9.32596 1.13602C9.32626 1.13558 9.32655 1.13513 9.32685 1.13469C9.63603 0.671703 10.1349 0.334485 10.6562 0.155279C11.1792 -0.0245053 11.807 -0.0733724 12.4002 0.14491Z"
                    fill="#292D32"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.73371 5.72815C1.63499 5.81927 1.5 6.03656 1.5 6.65204V16.452C1.5 17.0675 1.63499 17.2848 1.73371 17.3759C1.84716 17.4807 2.10748 17.602 2.75 17.602H3.75C4.39252 17.602 4.65284 17.4807 4.76629 17.3759C4.86501 17.2848 5 17.0675 5 16.452V6.65204C5 6.03656 4.86501 5.81927 4.76629 5.72815C4.65284 5.62342 4.39252 5.50204 3.75 5.50204H2.75C2.10748 5.50204 1.84716 5.62342 1.73371 5.72815ZM0.71629 4.62594C1.25284 4.13067 1.99252 4.00204 2.75 4.00204H3.75C4.50748 4.00204 5.24716 4.13067 5.78371 4.62594C6.33499 5.13482 6.5 5.86753 6.5 6.65204V16.452C6.5 17.2366 6.33499 17.9693 5.78371 18.4781C5.24716 18.9734 4.50748 19.102 3.75 19.102H2.75C1.99252 19.102 1.25284 18.9734 0.71629 18.4781C0.165005 17.9693 0 17.2366 0 16.452V6.65204C0 5.86753 0.165005 5.13482 0.71629 4.62594Z"
                    fill="#292D32"
                  />
                </svg>{" "}
                2.7k
              </button>

              <button className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/200/svg"
                  fill="none"
                  viewBox="0 0 35 40 "
                  strokeWidth={1.5}
                  stroke="currentcolor"
                  className="h-4 w-4 self-center"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.51433 0H29.8277C34.6828 0.166636 38.4884 4.22932 38.3377 9.08501V21.5817C38.4098 23.9268 37.5443 26.2039 35.9327 27.909C34.3212 29.6142 32.0964 30.6066 29.751 30.6667H11.5043C10.2416 30.6928 9.04413 31.2327 8.18849 32.1617L3.64599 37.0109C3.26115 37.4306 2.72039 37.6733 2.15099 37.6817C1.56292 37.6667 1.00524 37.4173 0.60206 36.9889C0.198885 36.5605 -0.0163259 35.9888 0.00432626 35.4009V9.08501C-0.146385 4.22932 3.65916 0.166636 8.51433 0ZM29.8276 27.7917C33.0954 27.6264 35.6146 24.8502 35.4627 21.5817V9.08501C35.6146 5.81655 33.0954 3.04035 29.8276 2.875H8.51432C5.24652 3.04035 2.72737 5.81655 2.87932 9.08501V33.6184L6.00349 30.2067C7.43221 28.6869 9.41853 27.8149 11.5043 27.7917H29.8276Z"
                    fill="black"
                  />
                </svg>
                40
              </button>
            </div>
            <div className="flex justify-end gap-5 text-gray-400">
              <button className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/200/svg"
                  fill="none"
                  viewBox="0 0 20 20 "
                  strokeWidth={1.5}
                  stroke="currentcolor"
                  className="h-4 w-4 self-center"
                >
                  <path
                    d="M8 15L1 19V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V19L8 15Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/200/svg"
                  fill="none"
                  viewBox="0 0 20 20 "
                  strokeWidth={1.5}
                  stroke="currentcolor"
                  className="h-4 w-4 self-center"
                >
                  <path
                    d="M17 13V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H2C1.73478 19 1.48043 18.8946 1.29289 18.7071C1.10536 18.5196 1 18.2652 1 18V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 1.35597L6.5 7.92597H9.5C9.27 12.536 5 14.986 5 14.986C9.4 14.986 13.79 13.276 14 7.92597H17L12.53 1.35597C12.4361 1.24447 12.319 1.15484 12.1869 1.09335C12.0547 1.03186 11.9108 1 11.765 1C11.6193 1 11.4753 1.03186 11.3431 1.09335C11.211 1.15484 11.0939 1.24447 11 1.35597Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 bg-gray-50 py-5">
        <div className="container mx-auto my-20 max-w-3xl ">
          <div className="container mx-auto max-w-3xl px-5">
            <div className="border-b border-gray-200 py-10">
              <div className="flex justify-between">
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
              </div>
              <div className="mt-5 flex justify-between">
                <div className="text-xl font-semibold">
                  Written by Uzman Ali
                </div>
              </div>
              <div className="text-base font-light">
                <div className="hover:underline">5.6K Followers</div>
                <div className="flex justify-between">
                  <div className="mt-5 text-lg">
                    Founder: {""}
                    <Link
                      href="https://startertracks.com/"
                      className="underline"
                    >
                      startertracks.com
                    </Link>
                    {""} → On a mission to help 10,000 people grow and create
                    income online in 2024
                  </div>
                  <div className="hidden md:block">
                    <div className="flex gap-3 text-sm text-white">
                      <button className="flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                        Follow
                      </button>
                      <button className="flex items-center justify-center rounded-full bg-green-500 p-3 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H18C18.5523 15 19 14.5523 19 14V2C19 1.44772 18.5523 1 18 1Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.62 1.22L10.62 7.51C10.4435 7.64951 10.225 7.7254 10 7.7254C9.77499 7.7254 9.55655 7.64951 9.38 7.51L1.38 1.22C1.55594 1.07884 1.77444 1.00131 2 1H18C18.2256 1.00131 18.4441 1.07884 18.62 1.22Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 font-semibold hover:underline">
              More from Uzman Ali
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 border-b border-gray-200 md:grid-cols-2">
              <BlogList />
              <BlogList />
              <BlogList />
              <BlogList />
            </div>

            <div className="text center mt-8 flex flex-col gap-5 border-t py-5 md:flex-row">
              <button className="rounded-3xl border border-black px-4 py-2 text-sm hover:bg-gray-200">
                See all from Uzman Ali
              </button>
            </div>
            <div className="mt-8 border-t">
              <div className="mt-5 text-2xl font-semibold">
                Recommended from Medium
              </div>
              <div className="mt-8 grid grid-cols-1 gap-8 border-b border-gray-200 md:grid-cols-2">
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBar />
    </>
  );
};

export default Post;
