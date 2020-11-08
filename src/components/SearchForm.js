import React from "react";
import { useGlobalContext } from "../context/context";

export default function SearchForm() {
  const { query, error, setQuery } = useGlobalContext();
  return (
    <section className="w-11/12 md:w-2/3 mx-auto">
      <form
        className="mt-8 flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label
          className="text-blue-600 text-2xl md:text-3xl font-semibold tracking-wide"
          htmlFor="suche"
        >
          Suche:
        </label>
        <input
          className="w-full md:w-1/2 text-xl md:text-2xl p-1 rounded-lg text-blue-500"
          type="text"
          id="suche"
          placeholder="Suche deine Filme"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </form>
      {error.show && <h1 className="text-red-500">{error.msg}</h1>}
    </section>
  );
}
