"use client";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Write from "~/app/_components/Writing/write";
import WriteHeader from "~/app/_components/WriteHeader";

const WritingPage = () => {
  return (
    <div>
      <WriteHeader />
      <Write />
    </div>
  );
};

export default WritingPage;
