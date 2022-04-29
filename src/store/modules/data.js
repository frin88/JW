import { fetchMovies } from "../../services/data-service";
const state = {
  resultList: [],
  watchList: [],
};

const mutations = {
  addItemToWatchList(state, item) {
    state.watchList.push(item);
  },
  setResultList(state, list) {
    state.resultList = list;
  },
};

const getters = {
  resultList: (state) => {
    // get release year from movie description
    const year_regex = /\((\d*?)\)/;

    state.resultList.map((result) => {
      let Y = year_regex.exec(result.description);
      result.releaseYear = Y && Y[1] ? Y[1] : "";

      let inWatchList = state.watchList.find((x) => x.id === result.id);
      result.inWatchList = inWatchList ? true : false;
    });

    return state.resultList;
  },
  watchList: (state) => state.watchList,

};

const actions = {
  addItemToWatchList({ commit }, payload) {
    commit("addItemToWatchList", payload);
  },
  setResultList({ commit }, payload) {
    commit("setResultList", payload);
  },
  async doSearch({ commit }, payload) {
    let res = await fetchMovies(payload);
    //[TODO] - add error handling based on response errorMessage
    commit("setResultList", res.results);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
