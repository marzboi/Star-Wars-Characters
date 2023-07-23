import { useCallback, useEffect, useMemo, useReducer } from "react";
import { Character } from "../models/character";
import { characterRepository } from "../services/character.repository";
import { consoleError } from "../services/errors";
import { CharacterState, characterReducer } from "../reducer/character.reducer";
import * as ac from "../reducer/character.actions.creator";

export function useCharacters() {
  const initialState: CharacterState = {
    characters: [],
    next: "",
    previous: "",
    currentCharacter: null,
    favoriteCharacters: [],
    createdCharacters: [],
    feedbackMessage: false,
  };

  const [characterState, dispatch] = useReducer(characterReducer, initialState);

  const repo = useMemo(() => new characterRepository(), []);

  const handleLoad = useCallback(
    async (url = "https://swapi.dev/api/people/?page=") => {
      if (!url) return;
      const loadedCharacters = await repo.getAll(url);
      dispatch(ac.loadCharacterAction(loadedCharacters.results));
      dispatch(ac.nextCharacterAction(loadedCharacters.next));
      dispatch(ac.previousCharacterAction(loadedCharacters.previous));
    },
    [repo]
  );

  const handleLoadLocalFavoritesServer = useCallback(
    async (url = "characters") => {
      const loadedCharacters = await repo.getAllLocal(url);
      dispatch(ac.loadFavoritesCharacterAction(loadedCharacters));
    },
    [repo]
  );

  const handleLoadLocalCreatedServer = useCallback(
    async (url = "created-characters") => {
      const loadedCharacters = await repo.getAllLocal(url);
      dispatch(ac.loadCreatedCharacterAction(loadedCharacters));
    },
    [repo]
  );

  useEffect(() => {
    handleLoad("https://swapi.dev/api/people/?page=");
  }, [handleLoad]);

  useEffect(() => {
    handleLoadLocalCreatedServer("created-characters");
  }, [handleLoadLocalCreatedServer]);

  useEffect(() => {
    handleLoadLocalFavoritesServer("characters");
  }, [handleLoadLocalFavoritesServer]);

  const handleLoadOneChar = async (character: Character) => {
    const loadedCharacter = await repo.getCharacter(character.url);
    dispatch(ac.loadSingleCharacterAction(loadedCharacter));
  };

  const handleLoadOneFavoriteChar = async (character: Character) => {
    const loadedCharacter = await repo.getFavoriteCharacter(character.id);
    dispatch(ac.loadSingleCharacterAction(loadedCharacter));
  };

  const handleLoadOneCreatedChar = async (character: Character) => {
    const loadedCharacter = await repo.getCreatedCharacter(character.id);
    dispatch(ac.loadSingleCharacterAction(loadedCharacter));
  };

  const handleAdd = async (character: Character, url: string) => {
    try {
      const newCharacter = await repo.create(character, url);
      dispatch(ac.createCharacterAction(newCharacter));
    } catch (error) {
      consoleError(error);
    }
  };

  const handleDelete = async (character: Character, url: string) => {
    try {
      await repo.delete(character.id, url);
      dispatch(ac.deleteCharacterAction(character.id));
    } catch (error) {
      consoleError(error);
    }
  };

  const togglefeedbackMessage = () => {
    dispatch(ac.togglefeedbackMessageAction());
    setTimeout(() => {
      dispatch(ac.togglefeedbackMessageAction());
    }, 3000);
  };

  return {
    characters: characterState.characters,
    currentCharacter: characterState.currentCharacter,
    next: characterState.next,
    previous: characterState.previous,
    favoritesCharacters: characterState.favoriteCharacters,
    createdCharacters: characterState.createdCharacters,
    feedbackMessage: characterState.feedbackMessage,
    handleLoad,
    handleAdd,
    handleDelete,
    handleLoadOneChar,
    handleLoadOneFavoriteChar,
    handleLoadLocalFavoritesServer,
    togglefeedbackMessage,
    handleLoadOneCreatedChar,
    handleLoadLocalCreatedServer,
  };
}
