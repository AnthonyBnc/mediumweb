import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "~/styles/globals.css";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

const Write = () => {
  return <></>;
};

export default Write;
