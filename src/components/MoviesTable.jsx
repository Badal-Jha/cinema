import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./comman/like";
import TableHeader from "./comman/tableHeader";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      lable: "Title",
    },
    { path: "genre.name", lable: "Genre" },
    { path: "numberInStock", lable: "Stock" },
    { path: "dailRentalRate", lable: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];
  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          onSort={onSort}
          sortColumn={sortColumn}
        />

        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <Link to={`/movies/${movie._id}`}>
                <td>{movie.title}</td>
              </Link>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
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
    );
  }
}

export default MoviesTable;
