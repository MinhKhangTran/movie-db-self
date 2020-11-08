import React from "react";
export const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlEndung) => {
  // standard fetch states
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState({ show: false, msg: "" });
  // fetching
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      if (data.Response === "True") {
        // console.log("gut");
        // Bei suche kommt data.search bei einzeln data
        setData(data.Search || data);
        // console.log(data.Search);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect for calling
  React.useEffect(() => {
    fetchData(`${url}${urlEndung}`);
  }, [urlEndung]);
  // returning
  return { loading, data, error };
};

export default useFetch;
