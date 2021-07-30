import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./comman/Like";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    // console.log(movie);
    const movies = this.state.movies.map((m) => {
      if (m === movie) {
        m.liked = !m.liked;
      }
      return m;
    });
    this.setState({ movies: movies });
  };

  render() {
    const count = this.state.movies.length;
    if (count === 0) return <p>There is No movie in database. </p>;
    return (
      <React.Fragment>
        <p>Showing {count} movies in database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Danger
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
