import { useContext } from "react";
import classes from "./MovieItem.module.css";
import FavoritesContext from "../../store/Favorites-context";

function MovieItem(props) {
  const favoriteCtx = useContext(FavoritesContext);
  const movieIsFavorite = favoriteCtx.movieIsFavorite(props.title);
  function toggleFavoriteStatusHandler() {
    if (movieIsFavorite) {
      favoriteCtx.removeFavorite(props.title);
    } else {
      favoriteCtx.addFavorite({
        title:props.title,
        image:props.image,
        imdb:props.imdb,
        description:props.description
      });
    }
  }
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.imdb}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>
          {movieIsFavorite?'Remove from Favorites':'Add to Favorites'}
        </button>
      </div>
    </li>
  );
}

export default MovieItem;
