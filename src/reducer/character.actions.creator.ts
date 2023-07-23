import { Character } from "../models/character";
import { actionTypes } from "./character.actions.types";

export type CharacterAction = {
  type: string;
  payload?: Character[] | Character | number | string | undefined;
};

export function loadCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.load,
    payload,
  };
}

export function loadFavoritesCharacterAction(
  payload: Character[]
): CharacterAction {
  return {
    type: actionTypes.loadfavorites,
    payload,
  };
}

export function loadCreatedCharacterAction(
  payload: Character[]
): CharacterAction {
  return {
    type: actionTypes.loadCreated,
    payload,
  };
}

export function nextCharacterAction(
  payload: string | undefined
): CharacterAction {
  return {
    type: actionTypes.next,
    payload,
  };
}

export function previousCharacterAction(
  payload: string | undefined
): CharacterAction {
  return {
    type: actionTypes.previous,
    payload,
  };
}

export function loadSingleCharacterAction(payload: Character): CharacterAction {
  return {
    type: actionTypes.loadOne,
    payload,
  };
}

export function deleteCharacterAction(payload: number) {
  return {
    type: actionTypes.delete,
    payload,
  };
}

export function createCharacterAction(payload: Character) {
  return {
    type: actionTypes.create,
    payload,
  };
}

export function updateCharacterAction(payload: Character) {
  return {
    type: actionTypes.update,
    payload,
  };
}

export function togglefeedbackMessageAction() {
  return {
    type: actionTypes.togglefeedbackMessage,
  };
}
