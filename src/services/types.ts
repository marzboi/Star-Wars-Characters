import { Character } from "../models/character";

export type ApiResponse = {
  results: Character[];
  next: string | undefined;
  previous: string | undefined;
};
