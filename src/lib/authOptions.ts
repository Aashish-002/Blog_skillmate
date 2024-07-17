import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../../prisma";

const GOOGLE_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

const GITHUB_ID = process.env.GITHUB_CLIENT_ID!;
const GITHUB_SECRET = process.env.GITHUB_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Admin Login",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // backend-logic
        const user = await prisma.user.findUnique({
          where: {
            email: email,
            password: password,
          },
        });

        if (user) {
          // if USER is present, remove password and return it
          user.password = null;
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: token.email!,
        },
      });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }
      const newToken = {
        id: dbUser.id,
        name: dbUser.name,
        role: dbUser.role,
        email: dbUser.email,
        picture: dbUser.image,
      };
      console.log(newToken);

      return newToken;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.picture;
      }
      return session;
    },
  },
};


export const getAuthSession = () => getServerSession(authOptions);