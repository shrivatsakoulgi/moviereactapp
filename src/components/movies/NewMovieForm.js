import { useRef } from "react";
import classes from "./NewMovieForm.module.css";

function NewMovieForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const imdbInputRef = useRef();
  const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const baseURL = "http://ec2-54-165-239-67.compute-1.amazonaws.com:8100/movies";
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredImdb = imdbInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const movieData = {
      title: enteredTitle,
      image: enteredImage,
      imdb: enteredImdb,
      description: enteredDescription,
    };

    fetch(baseURL + "/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((response) => {
        alert("Movie added...");
      })
      .catch((error) => {
        alert("Error");
      });


    titleInputRef.current.value = "";
    imageInputRef.current.value = "";
    imdbInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  }

  return (
    <div className={classes.item}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Movie Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Movie Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="imdb">IMDB</label>
          <input type="text" required id="imdb" ref={imdbInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Movie Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Movie</button>
        </div>
      </form>
    </div>
  );
}

export default NewMovieForm;
