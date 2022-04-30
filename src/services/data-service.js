import axios from "axios";

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
      imDbRating: "5.8",
      year: "2011",
      releaseYear: "2011",
      inWatchList: false,
    },
    {
      id: "tt1477172",
      resultType: "Title",
      image: "https://imdb-api.com/images/original/nopicture.jpg",
      title: "Day",
      description: "(2009)",
      imDbRating: "",
      year: "2009",
      releaseYear: "2009",
      inWatchList: false,
    },
    {
      id: "tt2066858",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BZDMwMzlhNDAtMWEyNi00MzRjLWIwM2YtZWU1MTQ4MWY2NDA0XkEyXkFqcGdeQXVyMTA5MTg3NzY@._V1_Ratio1.7727_AL_.jpg",
      title: "Dag",
      description: '(2011) (Short) aka "Day"',
      imDbRating: "6.2",
      year: "2011",
      releaseYear: "2011",
      inWatchList: false,
    },
    {
      id: "tt5109784",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMzc5ODExODE0MV5BMl5BanBnXkFtZTgwNDkzNDUxMzI@._V1_Ratio0.7273_AL_.jpg",
      title: "Mother!",
      description: '(2017) aka "Day 6"',
      imDbRating: "6.6",
      year: "2017",
      releaseYear: "2017",
      inWatchList: false,
    },
    {
      id: "tt0115624",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BYWQ3NTc1YzQtNDJhYS00NDIzLWFmM2EtZjgxNzQwNDQ4YjNmXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
      title: "Barb Wire",
      description: "(1996)",
      imDbRating: "3.4",
      year: "1996",
      releaseYear: "1996",
      inWatchList: false,
    },
    {
      id: "tt0319262",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BNWNkNzljZjktY2MwNi00OWExLTliNTMtOTk0NGU2ZDQ3ZTEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_Ratio0.7273_AL_.jpg",
      title: "The Day After Tomorrow",
      description: "(2004)",
      imDbRating: "6.4",
      year: "2004",
      releaseYear: "2004",
      inWatchList: false,
    },
    {
      id: "tt1242432",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BMTkxMTE3NzEzMl5BMl5BanBnXkFtZTcwMzc4MTU2Mw@@._V1_Ratio0.7273_AL_.jpg",
      title: "I Spit on Your Grave",
      description: '(2010) aka "Day of the Woman"',
      imDbRating: "6.2",
      year: "2010",
      releaseYear: "2010",
      inWatchList: false,
    },
    {
      id: "tt10886166",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BODljZTM3ODAtMDc0YS00NmI4LTlmZTUtM2I5MDAzNTQxZmMxXkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_Ratio0.7273_AL_.jpg",
      title: "365 Days",
      description: "(2020)",
      imDbRating: "3.4",
      year: "2020",
      releaseYear: "2020",
      inWatchList: false,
    },
    {
      id: "tt12996154",
      resultType: "Title",
      image:
        "https://imdb-api.com/images/original/MV5BYjY2NzUxNjgtNjJhNy00NTA4LTlmNzItYzQ4MDdjNWYxZjkwXkEyXkFqcGdeQXVyMTEwMTY3NDI@._V1_Ratio0.7273_AL_.jpg",
      title: "365 Days: This Day",
      description: "(2022)",
      imDbRating: "",
      year: "2022",
      releaseYear: "2022",
      inWatchList: false,
    },
  ],
  errorMessage: "",
};

async function fetchMovies(searchTerm) {
  try {
    if (process.env.VUE_APP_STATIC_DATA === "true") {
      // this to avoid calling API too many times and just use static data
      await new Promise((r) => setTimeout(r, 300));
      return data;
    } else {
      let resp = await axios.get(
        `${process.env.VUE_APP_IMDB_BASE_URL}SearchMovie/${process.env.VUE_APP_IMDB_API_KEY}/${searchTerm}`
      );

      await getRatings(resp.data);
      return resp.data;
    }
  } catch (ex) {
    console.error("ooops something went wrong in fetchMovies", ex);
  }
}

async function getRatings(data) {
  await Promise.all(
    data.results.map(async (item) => {
      const response = await getItemRating(item.id);

      if (response.data.errorMessage === "") {
        item.imDbRating = response.data.imDb;
      }
    })
  );
}

async function getItemRating(id) {
  try {
    let resp = await axios.get(
      `${process.env.VUE_APP_IMDB_BASE_URL}Ratings/${process.env.VUE_APP_IMDB_API_KEY}/${id}`
    );

    // console.log('id'  +  id + '--' + resp.data.imDb)
    return resp;
  } catch (ex) {
    console.error("ooops something went wrong in getItemRating", ex);
  }
}

export { fetchMovies };
