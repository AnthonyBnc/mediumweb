import React from "react";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="flex border-b bg-white py-2 md:sticky md:top-0 ">
      <ul className="flex space-x-8">
        <li className="flex items-center">
          <button className="h08 flex w-8 items-center justify-center rounded-full border hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-black">
            For you
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-black">
            Following
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-black">
            Technology
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-black">
            Data Science
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700 hover:text-black">
            Programming
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
