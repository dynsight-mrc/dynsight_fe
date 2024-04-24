import { NextAuthOptions } from "next-auth";
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
          const res = await fetch("http://38.242.254.49:5000/api/auth/signin", {
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