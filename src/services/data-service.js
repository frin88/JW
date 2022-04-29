import axios from "axios";

async function fetchMovies(searchTerm) {
  try {
    let resp = await axios.get(
      `${process.env.VUE_APP_IMDB_BASE_URL}SearchMovie/${process.env.VUE_APP_IMDB_API_KEY}/${searchTerm}`
    );
    return resp.data;
  } catch (ex) {
    console.error("ooops something went wrong in fetchMovies", ex);
  }
}

export { fetchMovies };
