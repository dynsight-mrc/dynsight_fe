import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "Credentials",
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        const res = await fetch("http://localhost:5000/api/auth/signin", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        
        const user = await res.json();
        
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        
        return true;
      }

      return false;
    },
    //@ts-ignore
    /* async redirect({ url, baseUrl }) {
      console.log("redirect");
      console.log(url);
      console.log(baseUrl);
      
      
      
      return process.env.NEXT_PUBLIC_HOST;

    }, */
    async session({ session, token, user }) {
      session.user = JSON.parse(token.sub as string);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = JSON.stringify(user);
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    maxAge: 10 * 60 * 60,
    strategy: "jwt",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
