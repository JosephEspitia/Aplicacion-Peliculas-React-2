import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import MovieDatails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/movie/:movieId" element={<MovieDatails />}>
            SingleMovie
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
