import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./comman/Like";
import Pagination from "./comman/Pagination";
import { paginate } from "../utils/paginate";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
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

  hanldlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const count = this.state.movies.length;
    if (count === 0) return <p>There is No movie in database. </p>;

    const movies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
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
            {movies.map((movie) => (
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
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.hanldlePageChange}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
