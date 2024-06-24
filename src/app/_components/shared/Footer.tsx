import React from "react";
import Link from "next/link";

const FooterBar = () => {
  return (
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
  );
};

export default FooterBar;
