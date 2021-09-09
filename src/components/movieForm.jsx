import React from "react";
import { useHistory } from "react-router";
const MoviesForm = ({ match }) => {
  const history = useHistory();
  return (
    <div>
      <h1>Movie Form {match.params.id}</h1>
      {/* history.push('/movies') means go to /movies after save button is clicked */}
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        save
      </button>
    </div>
  );
};
export default MoviesForm;
