import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const List = lazy(() => import("../list/list"));
const CharacterInfo = lazy(() => import("../characterInfo/character.info"));
const FavoriteCharacterList = lazy(
  () => import("../favorite.list/favorite.list")
);
const FavoriteCharacterInfo = lazy(
  () => import("../favoritecardinfo/favorite.card.info")
);
const CreateCharacter = lazy(() => import("../create/create"));
const CreatedCharacterList = lazy(() => import("../created.list/created.list"));
const CreatedCharacterInfo = lazy(
  () => import("../createdcardinfo/created.card.info")
);

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<List></List>}></Route>
        <Route
          path="/character-info"
          element={<CharacterInfo></CharacterInfo>}
        ></Route>
        <Route
          path="/favorite-character"
          element={<FavoriteCharacterList></FavoriteCharacterList>}
        ></Route>
        <Route
          path="/favorite-character-info"
          element={<FavoriteCharacterInfo></FavoriteCharacterInfo>}
        ></Route>
        <Route
          path="/create-character"
          element={<CreateCharacter></CreateCharacter>}
        ></Route>
        <Route
          path="/created-character-list"
          element={<CreatedCharacterList></CreatedCharacterList>}
        ></Route>
        <Route
          path="/created-character-info"
          element={<CreatedCharacterInfo></CreatedCharacterInfo>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
