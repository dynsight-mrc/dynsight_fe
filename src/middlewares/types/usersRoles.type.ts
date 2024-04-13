export type PagesAuthorization = {
    "company-occupant": string[];
    "organization-owner"?: string[];
    admin?: string[];
  };

export type UserRoles = "company-occupant" | "organization-owner" | "admin";
