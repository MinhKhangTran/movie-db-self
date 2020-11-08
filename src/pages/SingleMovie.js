import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function SingleMovie() {
  const { id } = useParams();
  const { loading, data, error } = useFetch(`&i=${id}`);
  // console.log(data);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error.show) {
    return (
      <div>
        <h1>Error...</h1>
        <h1>error.msg</h1>
        <button className="bg-blue-500 px-3 rounded text-blue-100">
          <Link to="/">Zurück zur Homepage</Link>
        </button>
      </div>
    );
  }
  const { Title, Year, Poster, Runtime, Genre, Plot, Country } = data;
  return (
    <div className="flex flex-col md:flex-row w-11/12 md:w-2/3 mx-auto my-8">
      <header className="md:flex-grow md:w-full md:mr-4">
        <h1 className="text-xl font-bold">{Title}</h1>
        <div className="flex justify-center md:justify-start my-2">
          <img src={Poster} alt={Title} />
        </div>
      </header>
      <footer>
        <h1>Year: {Year}</h1>
        <h1>{Plot}</h1>
        <h2>Runtime: {Runtime}</h2>
        <p>Genre: {Genre}</p>
        <p>{Country}</p>
        <button className="bg-blue-500 px-3 rounded text-blue-100">
          <Link to="">Zurück zu den Filmen</Link>
        </button>
      </footer>
    </div>
  );
}
