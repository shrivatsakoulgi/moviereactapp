import { Component } from "react";
import MovieList from "../components/movies/MovieList";

class HomePage extends Component {
  state = {
    allMovies: [],
  };
  baseURL = "http://ec2-54-165-239-67.compute-1.amazonaws.com:8100/movies";
  async componentDidMount() {
  
    const response = await fetch(this.baseURL + "/all");
    const body = await response.json();
    this.setState({ allMovies: body });
  }
  render() {
    const { allMovies } = this.state;
    return (
      <div className="content">
        <h2>All Movies</h2>
        <MovieList movies={allMovies}/>
      </div>
    );
  }
}

export default HomePage;
