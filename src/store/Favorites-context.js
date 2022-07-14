import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMovie) => {},
  removeFavorite: (movieTitle) => {},
  movieIsFavorite: (movieTitle) => {},
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]); // React Hook

  function addFavoriteHandler(favoriteMovie) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMovie);
    });
  }

  function removeFavoriteHandler(movieTitle) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((movie) => movie.title !== movieTitle);
    });
  }

  function movieIsFavoriteHandler(movieTitle) {
    return userFavorites.some((movie) => movie.title === movieTitle);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    movieIsFavorite: movieIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
export {FavoritesContextProvider};
