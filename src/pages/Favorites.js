import { useContext } from "react";
import FavoritesContext from "../store/Favorites-context";
import MovieList from "../components/movies/MovieList";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have got no favorite Movies yet. Start adding them</p>;
  } else {
    content = <MovieList movies={favoritesCtx.favorites} />;
  }

  return (
    <div className="content">
      <h2>Favorite Movies Page</h2>
      {content}
    </div>
  );
}

export default Favorites;
