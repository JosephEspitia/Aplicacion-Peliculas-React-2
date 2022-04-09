/* import movie from "./movie.json"; */
import "../assets/MovieDetails.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../api/httpClient";
import Spiner from "../components/Spiner";
import placeholder from "../assets/img/placeholder.jpg";


function MovieDatails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  


  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]); /* si me cambia movie id se vuelve ejecutar el efecto */
  if (isLoading) {
    return <Spiner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = movie.poster_path
  ? "http://image.tmdb.org/t/p/w300" + movie.poster_path
  : placeholder;
  return (
    <div className="detailsContainer">
      <img className="col movieImage" src={imageUrl} alt={movie.title} />
      <div className="col movieDetails">
        <p className="firstItem">
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres
            .map((genre) => {
              return genre.name;
            })
            .join(", ")}
        </p>
      </div>
    </div>
  );
}

export default MovieDatails;
