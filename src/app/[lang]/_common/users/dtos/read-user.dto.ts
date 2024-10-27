export type ReadUserOverview = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
    role: string;
  };
  
  export type ReadUserByOrganizationId = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
  export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
  }
  export type UserRole =
    | "root"
    | "admin"
    | "organization-owner"
    | "company-occupant"
    | "facility-manager"
    | "property-manager"
    | "asset-manager"
    | "installer";
  
  type PersonalInformationDto = {
    firstName: string;
    lastName: string;
   gender?: Gender;
    dateOfBirth?: string;
  };
  type ContactInformationDto = {
    address?: string
    phone?: string;
    email: string;
  };
  type AuthenticationDto = {
    username: string;
    password: string;
  };
  type PermissionsDto = {
    role: UserRole;
    organizationId?: string;
    floorId?: string;
    buildingId?: string;
  };
  type ProfileInformationDto = {
    picture?: string;
  };
  type PreferencesDto = {
    language?: string;
    theme?: string;
  };
  
  export type ReadUserDto = {
    id: string;
    personalInformation: PersonalInformationDto;
    contactInformation: ContactInformationDto;
    authentication: AuthenticationDto;
    permissions: PermissionsDto;
    profileInformation?: ProfileInformationDto;
    preferences?: PreferencesDto | undefined;
  };
  