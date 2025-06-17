import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const apiUrl = "http://localhost:3000";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`${apiUrl}/movies`).then((res) => setMovies(res.data));
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row g-5">
          {movies.map((movie) => (
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <p className="card-text"> {movie.title}</p>
                  <NavLink
                    to={`movies/${movie.id}`}
                    className="btn btn-primary"
                  >
                    Go somewhere
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
