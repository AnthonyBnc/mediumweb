"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoginPageDes from "./LoginPageDes";
import Image from "next/image";

const SigninCompo = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [extendedLoading, setExtendedLoading] = useState(true);

  useEffect(() => {
    console.log("Session status: ", status);
    console.log("Session data: ", session);
    if (status === "authenticated") {
      router.push("/blog");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "loading") {
      const timer = setTimeout(() => {
        setExtendedLoading(false);
      }, 3000); // 3000ms for 3 seconds delay
      return () => clearTimeout(timer);
    } else {
      setExtendedLoading(false);
    }
  }, [status]);

  // If the session status is loading, you can show a loading state
  if (status === "loading") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex w-full items-center justify-center">
          <Image
            src="/mediumlogo.png"
            alt="Medium Logo"
            width={200}
            height={35}
            className="h-auto max-w-full"
          />
        </div>
        <div className="flex w-full flex-grow items-center justify-center pb-4">
          <img
            src="/loading.gif"
            alt="Loading..."
            width={600}
            height={600}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    );
  }

  // If the user is not authenticated, show the login page
  return <LoginPageDes />;
};

export default SigninCompo;
