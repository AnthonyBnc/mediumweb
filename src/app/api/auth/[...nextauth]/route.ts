import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { env } from "~/env";
import { db } from "~/server/db";
import type { NextAuthOptions, Session, User } from "next-auth";
import type { Adapter } from "next-auth/adapters";

// Extend the User type to include id
interface ExtendedUser extends User {
  id: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
   
  ],
  adapter: PrismaAdapter(db) as Adapter,
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }: { session: Session, user: ExtendedUser }): Promise<Session> {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
        },
      };
    },
  },
};

export default NextAuth(authOptions);
