type CoordinatesDto = {
  lat: number;
  long: number;
};

export type AddressDto = {
  streetAddress: string;
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  postalCode: number;
  country: string;
  coordinates?: CoordinatesDto;
};
