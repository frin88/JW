import { fetchMovies } from "../../services/data-service";
import { orderBy as _orderBy } from "lodash";

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
    //get release year from movie description
    const year_regex = /\((\d*?)\)/;

    state.resultList.map((result) => {
      let Y = year_regex.exec(result.description);
      result.releaseYear = Y && Y[1] ? Y[1] : "";

      let inWatchList = state.watchList.find((x) => x.id === result.id);
      result.inWatchList = inWatchList ? true : false;
    });

    let orderedList = _orderBy(state.resultList, ["imDbRating"], ["desc"]);

    return orderedList;
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
  async doSearch({ dispatch, commit }, payload) {
    dispatch("ui/toggleLoader", { value: true }, { root: true });
    let res = await fetchMovies(payload);
    dispatch("ui/toggleLoader", { value: false }, { root: true });

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
