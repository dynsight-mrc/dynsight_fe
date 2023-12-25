import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface User {
    personalInformation: {
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: string;
    };
    permissions: {
      role: string;
      organization: string;
    };
    token: string;
  }

}
