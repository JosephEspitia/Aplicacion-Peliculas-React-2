/* import movies from "../movies.json"; */
import MovieCard from "./MovieCard";
import Spiner from "./Spiner";
import "../assets/MoviesGrid.css";
import { useEffect, useState } from "react";
import { get } from "../api/httpClient";
import { useQuery } from "../hooks/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";


function MoviesGrid() {
  /* let movies=[] */
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies)=> prevMovies.concat(data.results));
      setHasMore(data.page < data.total_page)
      setIsLoading(false);
    });
  }, [search, page]);

/*   if (isLoading) {
    return <Spiner />;
  }
 */
  if (!isLoading && movies.length === 0) {
    return <Empty />
  }
  return (
    <InfiniteScroll
    dataLength={movies.length}
    hasMore={hasMore}
    next={()=> setPage(prevPage => prevPage + 1 )}
    loader={<Spiner />}>
       <ul className="moviesGrid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}>
            {movie.title}
          </MovieCard>
        ))}
      </ul>
    </InfiniteScroll>
  );
}
export default MoviesGrid;
