// import axios from "axios";
let data = {
  searchType: "Movie",
  expression: "day",
  results: [
    {
      id: "tt1961485",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMGI2MzBhY2EtYzc1Ni00NTU4LWI5MTUtNzRiNGU3ZGQwOGRmXkEyXkFqcGdeQXVyMzU5OTE2NTI@._V1_Ratio0.7273_AL_.jpg",
      title: "Day",
      description: "(2011)",
    },
    {
      id: "tt1477172",
      resultType: "Title",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      title: "Day",
      description: "(2009)",
    },
    {
      id: "tt2066858",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BZDMwMzlhNDAtMWEyNi00MzRjLWIwM2YtZWU1MTQ4MWY2NDA0XkEyXkFqcGdeQXVyMTA5MTg3NzY@._V1_Ratio1.7727_AL_.jpg",
      title: "Dag",
      description: '(2011) (Short) aka "Day"',
    },
    {
      id: "tt5109784",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_Ratio0.7273_AL_.jpg",
      title: "Mother!",
      description: '(2017) aka "Day 6"',
    },
    {
      id: "tt0115624",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BYWQ3NTc1YzQtNDJhYS00NDIzLWFmM2EtZjgxNzQwNDQ4YjNmXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
      title: "Barb Wire",
      description: "(1996)",
    },
    {
      id: "tt0319262",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BNWNkNzljZjktY2MwNi00OWExLTliNTMtOTk0NGU2ZDQ3ZTEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
      title: "The Day After Tomorrow",
      description: "(2004)",
    },
    {
      id: "tt1242432",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMTkxMTE3NzEzMl5BMl5BanBnXkFtZTcwMzc4MTU2Mw@@._V1_Ratio0.7273_AL_.jpg",
      title: "I Spit on Your Grave",
      description: '(2010) aka "Day of the Woman"',
    },
    {
      id: "tt10886166",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BODljZTM3ODAtMDc0YS00NmI4LTlmZTUtM2I5MDAzNTQxZmMxXkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_Ratio0.7273_AL_.jpg",
      title: "365 Days",
      description: "(2020)",
    },
    {
      id: "tt12996154",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BYjY2NzUxNjgtNjJhNy00NTA4LTlmNzItYzQ4MDdjNWYxZjkwXkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_Ratio0.7273_AL_.jpg",
      title: "365 Days: This Day",
      description: "(2022)",
    },
  ],
  errorMessage: "",
};

async function fetchMovies(searchTerm) {
  try {
    // let resp = await axios.get(
    //   `${process.env.VUE_APP_IMDB_BASE_URL}SearchMovie/${process.env.VUE_APP_IMDB_API_KEY}/${searchTerm}`
    // );
    // return resp.data;
    await new Promise(r => setTimeout(r, 300));

    console.log(searchTerm);
    return data;
  } catch (ex) {
    console.error("ooops something went wrong in fetchMovies", ex);
  }
}

export { fetchMovies };
