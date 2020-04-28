export type TMemoCard = {
  id: string,
  title: string;
  description: string;
  badExample?: string;
  goodExample?: string;
  lastUsedDate: Date;
}