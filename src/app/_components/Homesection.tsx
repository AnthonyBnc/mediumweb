"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import AuthModal from "./AuthCompo";
import { useAuthModalContext } from "./contexts/AuthModal.context";
import MGrid from "./landingpage/MGrid";
import FooterBar from "./shared/Footer";

export default function HomeSection() {
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [isScrollComplete, setIsScrollComplete] = useState(false);

  const { triggerSignIn } = useAuthModalContext();

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (heroRef) {
      if (heroRef.current) {
        setHeight(heroRef.current.clientHeight);
      }
    }
  }, [heroRef]);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, [height]);

  const changeNavbarColor = () => {
    if (height > 0) {
      if (window.scrollY >= height - 100) {
        setIsScrollComplete(true);
      } else {
        setIsScrollComplete(false);
      }
    }
  };

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
                Our story
              </button>
              <button className="transition-all hover:underline">
                Membership
              </button>
              <button
                className="transition-all hover:underline"
                onClick={triggerSignIn}
              >
                Write
              </button>

              <button
                className="transition-all hover:underline"
                onClick={() => setIsAuthDialogOpen(true)}
              >
                Sign In
              </button>
            </div>
            <button className="mx-2 rounded-full bg-black px-4 py-2 text-white">
              Get started
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
              <Link href="/blog">Start Reading</Link>
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
