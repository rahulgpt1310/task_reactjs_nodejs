import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import MovieCard from "./MovieCard/MovieCard";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await fetch(`http://localhost:3000/movie`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status !== 200) {
      alert("no data available");
    } else {
      // console.log("data hai", data);
      setMovies(data.data);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="app">
      <div className="app__top">
        <img src="vite.svg" alt="App Logo" className="app__logo" />
        <h1>Movies list</h1>
      </div>
      <div className="">
        {movies.map(({ id, title, rank }) => (
          <MovieCard key = '' title={title} rank={rank} id={id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
