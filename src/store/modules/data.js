import { fetchData } from "../../services/data-service";
import { orderBy as _orderBy } from "lodash";

const state = {
  resultList: { movies: [], series: [] },
  watchList: [],
};

const mutations = {
  addItemToWatchList(state, item) {
    state.watchList.push(item);
  },
  setResultList(state, payload) {
    state.resultList[payload.searchType] = payload.list;
  },
};

const getters = {
  resultList: (state, getters, rootState, rootGetters) => {
    const searchType = rootGetters["ui/searchType"];
    const currentList = state.resultList[searchType];

    //get release year from movie description
    const year_regex = /\((\d*?)\)/;

    currentList.map((result) => {
      let Y = year_regex.exec(result.description);
      result.releaseYear = Y && Y[1] ? Y[1] : "";

      // get if item is in watchlist so button "add to watchlist" can be disabled
      const inWatchList = state.watchList.find((x) => x.id === result.id);
      result.inWatchList = inWatchList ? true : false;
    });

    const orderedList = _orderBy(currentList, ["imDbRating"], ["desc"]);

    return orderedList;
  },
  watchList: (state) => state.watchList,
};

const actions = {
  addItemToWatchList({ commit }, payload) {
    commit("addItemToWatchList", payload);
  },

  async doSearch({ dispatch, commit, rootGetters }) {
    // read ui filters
    const searchType = rootGetters["ui/searchType"];
    const searchTerm = rootGetters["ui/searchTerm"];

    // set loader on
    dispatch("ui/toggleLoader", { value: true }, { root: true });
    // request data from API
    const res = await fetchData({
      searchTerm: searchTerm,
      searchType: searchType,
    });
    // set loader off
    dispatch("ui/toggleLoader", { value: false }, { root: true });

    // check results and errors
    const hasError = res.errorMessage !== "";
    const list = hasError ? [] : res.results;
    const errorMessage = hasError ? res.errorMessage : "";

    commit("setResultList", { list: list, searchType: searchType });
    dispatch("ui/setErrorMsg", { value: errorMessage }, { root: true });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
