import { characterRepository } from "../services/character.repository";
import { Character } from "../models/character";

const mockCharacter: Character = {
  id: 1,
  name: "Test",
  url: "url",
} as Character;

describe("characterRepository", () => {
  let mockFetch: jest.Mock;

  beforeEach(() => {
    mockFetch = jest.fn();
    global.fetch = mockFetch as any;
  });

  test("should get all characters", async () => {
    const mockResponse = { ok: true, json: jest.fn().mockResolvedValue([]) };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    await repo.getAll("test-url");

    expect(mockFetch).toHaveBeenCalledWith("test-url");
  });

  test("should get all local characters", async () => {
    const mockResponse = { ok: true, json: jest.fn().mockResolvedValue([]) };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    await repo.getAllLocal("local-url");

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/local-url");
  });

  test("should create a character", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacter),
    };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    await repo.create(mockCharacter, "create-url");

    expect(mockFetch).toHaveBeenCalledWith("http://localhost:3000/create-url", {
      method: "POST",
      body: JSON.stringify(mockCharacter),
      headers: { "Content-Type": "application/json" },
    });
  });

  test("should update a character", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacter),
    };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    await repo.update(mockCharacter.id, mockCharacter);

    expect(mockFetch).toHaveBeenCalledWith(
      `http://localhost:3000/${mockCharacter.id}`,
      {
        method: "PATCH",
        body: JSON.stringify(mockCharacter),
        headers: { "Content-Type": "application/json" },
      }
    );
  });

  test("should delete a character", async () => {
    const mockResponse = { ok: true };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    const res = await repo.delete(mockCharacter.id, "characters/");

    expect(mockFetch).toHaveBeenCalledWith(
      `http://localhost:3000/characters/${mockCharacter.id}`,
      {
        method: "DELETE",
      }
    );
    expect(res).toBe(true);
  });

  test("should get a character", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacter),
    };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    await repo.getCharacter(mockCharacter.url);

    expect(mockFetch).toHaveBeenCalledWith(mockCharacter.url);
  });

  test("should get a favorite character", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacter),
    };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    await repo.getFavoriteCharacter(mockCharacter.id);

    expect(mockFetch).toHaveBeenCalledWith(
      `http://localhost:3000/characters/${mockCharacter.id}`
    );
  });

  test("should get a created character", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(mockCharacter),
    };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();
    await repo.getCreatedCharacter(mockCharacter.id);

    expect(mockFetch).toHaveBeenCalledWith(
      `http://localhost:3000/created-characters/${mockCharacter.id}`
    );
  });

  test("should throw an error if getAll fetch fails", async () => {
    const mockResponse = { ok: false, status: 404, statusText: "Not Found" };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();

    await expect(repo.getAll("characters")).rejects.toThrow(
      "Error: 404. Not Found"
    );
    expect(mockFetch).toHaveBeenCalledWith("characters");
  });

  test("should throw an error if getAllLocal fetch fails", async () => {
    const mockResponse = { ok: false, status: 404, statusText: "Not Found" };
    mockFetch.mockResolvedValue(mockResponse);

    const repo = new characterRepository();

    await expect(repo.getAllLocal("characters")).rejects.toThrow(
      "Error: 404. Not Found"
    );
    expect(mockFetch).toHaveBeenCalledWith(`http://localhost:3000/characters`);
  });
});
