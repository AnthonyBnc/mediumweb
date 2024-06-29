import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

const WriteHeader = ({ publishButton }: { publishButton: React.ReactNode }) => {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container mx-auto max-w-6xl px-4 py-5 md:px-6">
      <div className="flex items-center justify-between">
        <Link href="/blog">
          <Image
            src="/mediumlogo.png"
            alt="Medium Logo"
            width={200}
            height={35}
          />
        </Link>

        <div className="flex items-center space-x-4">
          {publishButton && <div>{publishButton}</div>}
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

          <div className="relative">
            <button onClick={toggleMenu} className="focus:outline-none">
              <img
                src={
                  session?.user?.image ??
                  "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
                }
                className="h-10 w-10 rounded-full"
                alt="Profile"
              />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 z-20 mt-2 w-48 rounded-md bg-white shadow-lg">
                <div className="py-1">
                  <Link
                    href="/profile"
                    passHref
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default WriteHeader;
