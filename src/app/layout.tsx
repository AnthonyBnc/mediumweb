import "~/styles/globals.css";
import SessionWrapper from "./_components/SessionWrapper";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

import { getServerSession } from "next-auth";

export const metadata = {
  title: "Medium webpage",
  description:
    "Discover stories, thinking, and expertise from writers on any topic.",
  icons: [
    {
      rel: "icon",
      url: "https://cdn.mos.cms.futurecdn.net/uazw6gFQuEC29mxMM55Tpb.jpg",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <SessionWrapper>
      <html lang="en" className={`${GeistSans.variable} antialiased`}>
        <body>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
