import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

export default function MovieItem({ imdbID, Title, Year, Poster }) {
  return (
    <Wrapper>
      <Link to={`/movies/${imdbID}`}>
        <article className="bild relative overflow-hidden mx-auto flex flex-col items-center">
          <div className="w-full" style={{ height: "350px" }}>
            <img
              className="w-full object-cover object-top h-full rounded-lg"
              src={Poster === "N/A" ? url : Poster}
              alt={Title}
            />
          </div>
          <footer className="beschreibung rounded-b-lg p-1 text-white text-lg absolute bottom-0 left-0 right-0 transform translate-y-full transition transition-all duration-700 ease-in-out">
            <h1>{Title}</h1>
            <h1 className="font-bold">{Year}</h1>
          </footer>
        </article>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .beschreibung {
    background: rgba(0, 0, 0, 0.5);
  }
  .bild:hover .beschreibung {
    transform: translateY(0);
  }
`;
