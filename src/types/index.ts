export type Industry = {
  id: number;
  isPopular: boolean;
  mostCommonServices: number[];
  name: string;
  services: { id: number; name: string }[];
  synonyms: string[];
  type: string;
  wpId: number;
};
