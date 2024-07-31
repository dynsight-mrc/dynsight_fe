export type ReadBlocOverview = {
  id: string;
  name: string;
  floor?: { id: string; name: string; number: number };
  building?: { id: string; name: string };
  organization?: { id: string; name: string };
  sruface?: number;
  zone?: { id: string; name: string };
};
