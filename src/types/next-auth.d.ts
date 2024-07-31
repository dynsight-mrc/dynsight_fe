import NextAuth from "next-auth/next";

/* declare module "next-auth" {
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

} */

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
      personalInformation: {
        firstName: string;
        lastName: string;
        gender: Gender;
        dateOfBirth: string;
      };
      contactInformation: {
        address: string;
        phone: string;
        email: string;
      };
      profileInformation?: {
        picture: string;
      };
      preferences?: {
        language: string;
        theme: string;
      };
      permissions: { role: UserRole; organization: "string" };
    };
    

  } 

}
