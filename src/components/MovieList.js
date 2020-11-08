import React from "react";
import { useGlobalContext } from "../context/context";
import MovieItem from "./MovieItem";

export default function MovieList() {
  const { data, loading } = useGlobalContext();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-11/12 md:w-4/5 mx-auto gap-4 my-8">
      {data.map((movie) => {
        return <MovieItem key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
}
