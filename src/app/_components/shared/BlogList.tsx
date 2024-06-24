import React from "react";
import Link from "next/link";

const blogPost = {
  author: "Uzman Ali",
  title: "This Guy Makes $1M+ per Year With 0 Employees",
  description: "Ivan Kutskir - the world's most underrated solopreneur",
  date: "May 11, 2024",
  readingTime: "12 mins",
  followers: "5.4K",
  bio: "Founder: startertracks.com → On a mission to help 10,000 people grow and create income online in 2024",
  image: "photo.png",
};

const BlogList: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-4">
          <div className="flex gap-2 py-2">
            <div className="h-5 w-5 rounded-xl bg-gray-300"></div>
            <div className="self-center font-serif text-xs">
              <div className="group relative inline-block">
                <a className="hover:underline">{blogPost.author}</a>
                <div className="absolute left-20 top-2 z-50 w-80 scale-0 rounded bg-white p-5 font-normal shadow-xl group-hover:scale-100">
                  <div className="h-8 w-8 rounded-full bg-gray-200 p-1 text-white"></div>
                  <div className="self-center font-serif text-lg">
                    {blogPost.author}
                  </div>
                  <div className="text-md mt-3">{blogPost.bio}</div>
                  <div className="border-gray-200-pt-3 mt-3 flex justify-between border-t">
                    <div className="self-center text-gray-500">
                      {blogPost.followers} followers
                    </div>
                    <a className="mt-1 rounded-3xl bg-green-500 px-3 py-2 text-white">
                      Follow
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link className="mt-1 text-lg font-bold hover:underline" href="/post">
            {blogPost.title}
          </Link>
          <div className="mt-1 text-sm font-light text-gray-50">
            {blogPost.description}
          </div>
          <div className="space-between mt-2 flex gap-3">
            <div className="text-xs font-light text-gray-600">
              {blogPost.date} - {blogPost.readingTime} reading
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center">
          <img src={blogPost.image} alt="Photo" />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
