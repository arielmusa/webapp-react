import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ReviewForm from "../components/ReviewForm";
import ReviewsList from "../components/ReviewsList";

const apiUrl = "http://localhost:3000";

export default function MovieDetailPage() {
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`${apiUrl}/movies/${id}`).then((res) => {
      setMovie(res.data.movie);
      setReviews(res.data.reviews);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="col">
          <div>{movie.map((movie) => movie.title)}</div>
        </div>
      </div>
      <ReviewsList data={reviews} />
      <ReviewForm />
    </>
  );
}
