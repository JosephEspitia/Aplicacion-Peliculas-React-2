import "../assets/MovieCard.css";
import { Link } from "react-router-dom";
import placeholder from "../assets/img/placeholder.jpg";

function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? "http://image.tmdb.org/t/p/w300" + movie.poster_path
    : placeholder;
  return (
    <div>
      <li className="movieCard">
        <Link to={"/movie/" + movie.id}>
          <img className="movieImage" src={imageUrl} alt={movie.title} />
          <div>{movie.title}</div>
        </Link>
      </li>
    </div>
  );
}

export default MovieCard;
