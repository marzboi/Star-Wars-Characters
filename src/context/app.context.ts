import { createContext } from "react";
import { useCharacters } from "../hooks/use.character";

export type ContextStructure = {
  characterContext: ReturnType<typeof useCharacters>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
