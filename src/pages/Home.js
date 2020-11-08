import React from "react";
import MovieList from "../components/MovieList";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <SearchForm />
      <MovieList />
    </>
  );
}
