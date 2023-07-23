import { characterReducer, CharacterState } from "./character.reducer";
import { actionTypes } from "./character.actions.types";
import { Character } from "../models/character";

describe("characterReducer", () => {
  let initialState: CharacterState;

  beforeEach(() => {
    initialState = {
      characters: [],
      next: undefined,
      previous: undefined,
      currentCharacter: null,
      createdCharacters: [],
      favoriteCharacters: [],
      feedbackMessage: false,
    };
  });

  describe("LOAD action", () => {
    test("should load characters", () => {
      const characters: Character[] = [];
      const action = { type: actionTypes.load, payload: characters };
      const state = characterReducer(initialState, action);
      expect(state.characters).toEqual(characters);
    });
  });

  describe("DELETE action", () => {
    test("should delete a character", () => {
      const characters: Character[] = [
        { id: 1, name: "Character 1" } as unknown as Character,
        { id: 2, name: "Character 2" } as unknown as Character,
      ];
      const action = { type: actionTypes.delete, payload: characters[0].id };
      initialState.characters = characters;
      const state = characterReducer(initialState, action);
      expect(state.characters).not.toContain(characters[0]);
    });
  });

  describe("CREATE action", () => {
    test("should create a character", () => {
      const newCharacter: Character = {
        id: 3,
        name: "Character 3",
      } as unknown as Character;
      const action = { type: actionTypes.create, payload: newCharacter };
      const state = characterReducer(initialState, action);
      expect(state.characters).toContain(newCharacter);
    });
  });

  describe("UPDATE action", () => {
    test("should update a character", () => {
      const characters: Character[] = [
        { id: 1, name: "Character 1" } as unknown as Character,
        { id: 2, name: "Character 2" } as unknown as Character,
      ];
      const updatedCharacter: Character = {
        id: 1,
        name: "Updated Character",
      } as unknown as Character;
      const action = { type: actionTypes.update, payload: updatedCharacter };
      initialState.characters = characters;
      const state = characterReducer(initialState, action);
      const updatedCharacterInState = state.characters.find(
        (character) => character.id === updatedCharacter.id
      );
      expect(updatedCharacterInState).toEqual(updatedCharacter);
    });
  });

  describe("LOAD_ONE action", () => {
    test("should load one character", () => {
      const character: Character = {
        id: 1,
        name: "Character 1",
      } as unknown as Character;
      const action = { type: actionTypes.loadOne, payload: character };
      const state = characterReducer(initialState, action);
      expect(state.currentCharacter).toEqual(character);
    });
  });

  describe("NEXT action", () => {
    test("should update next property", () => {
      const nextPageUrl = "https://example.com/characters?page=2";
      const action = { type: actionTypes.next, payload: nextPageUrl };
      const state = characterReducer(initialState, action);
      expect(state.next).toEqual(nextPageUrl);
    });
  });

  describe("PREVIOUS action", () => {
    test("should update previous property", () => {
      const previousPageUrl = "https://example.com/characters?page=1";
      const action = { type: actionTypes.previous, payload: previousPageUrl };
      const state = characterReducer(initialState, action);
      expect(state.previous).toEqual(previousPageUrl);
    });
  });

  describe("LOAD_FAVORITES action", () => {
    test("should load favorite characters", () => {
      const favoriteCharacters: Character[] = [
        { id: 1, name: "Character 1" } as unknown as Character,
        { id: 2, name: "Character 2" } as unknown as Character,
      ];
      const action = {
        type: actionTypes.loadfavorites,
        payload: favoriteCharacters,
      };
      const state = characterReducer(initialState, action);
      expect(state.favoriteCharacters).toEqual(favoriteCharacters);
    });
  });

  describe("LOAD_CREATED action", () => {
    test("should load created characters", () => {
      const createdCharacters: Character[] = [
        { id: 1, name: "Character 1" } as unknown as Character,
        { id: 2, name: "Character 2" } as unknown as Character,
      ];
      const action = {
        type: actionTypes.loadCreated,
        payload: createdCharacters,
      };
      const state = characterReducer(initialState, action);
      expect(state.createdCharacters).toEqual(createdCharacters);
    });
  });

  describe("TOGGLE_FEEDBACK_MESSAGE action", () => {
    test("should toggle feedbackMessage property", () => {
      const initialFeedbackMessage = initialState.feedbackMessage;
      const action = { type: actionTypes.togglefeedbackMessage };
      const state = characterReducer(initialState, action);
      expect(state.feedbackMessage).toBe(!initialFeedbackMessage);
    });
  });

  describe("DEFAULT case", () => {
    test("should return the initial state when no action is matched", () => {
      const action = { type: "UNKNOWN_ACTION", payload: undefined };
      const state = characterReducer(initialState, action);
      expect(state).toEqual(initialState);
    });
  });
});
