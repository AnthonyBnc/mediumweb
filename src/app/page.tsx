import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import "~/styles/globals.css";
import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import HomeSection from "./_components/Homesection";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";

// Function to fetch session
async function fetchSession() {
  const session = await getServerAuthSession();
  return session;
}

// Home component
export default async function Home() {
  // Assuming you have access to the context if needed
  const session = await fetchSession(); // Updated to call with no arguments

  // Handle client-side redirection based on session
  if (typeof window !== "undefined" && session) {
    window.location.href = "/home";
    return null;
  }

  return (
    <>
      <HomeSection />
    </>
  );
}
