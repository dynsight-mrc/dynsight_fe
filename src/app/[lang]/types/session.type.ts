import { ISODateString } from "next-auth";

enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}
export enum UserRole {
  ADMIN = "admin",
  CO = "company-occupant",
  OO = "organization-owner",
}
export type CustomSession = {
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

  expires?: ISODateString;
};
