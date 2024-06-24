import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

import { getServerSession } from "next-auth";

import LoginPage from "./_components/AuthCompo/LoginModal";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Medium webpage",
  description:
    "Discover stories, thinking, and expertise from writers on any topic.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" className={`${GeistSans.variable} antialiased`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
