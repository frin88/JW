const state = {
  isModalOpen: false,
  loader: 0,
  errorMsg: "",
  searchTerm: "",
  searchType: "movies",
};

const mutations = {
  toggleModal(state) {
    state.isModalOpen = !state.isModalOpen;
  },
  toggleLoader(state, payload) {
    payload ? state.loader++ : state.loader--;
    if (state.loader < 0) {
      state.loader = 0;
    }
  },
  setSearchTerm(state, term) {
    state.searchTerm = term;
  },
  setSearchType(state, payload) {
    state.searchType = payload;
  },
  setErrorMsg(state, payload) {
    state.errorMsg = payload;
  },
};

const getters = {
  isModalOpen: (state) => state.isModalOpen,
  isLoading: (state) => state.loader > 0,
  isError: (state) => state.errorMsg !== "",
  errorMsg: (state) => state.errorMsg,
  isSearchActive: (state) => state.searchTerm !== "",
  searchType: (state) => state.searchType,
  searchTerm: (state) => state.searchTerm,
};

const actions = {
  toggleModal({ commit }) {
    commit("toggleModal");
  },
  toggleLoader({ commit }, payload) {
    commit("toggleLoader", payload.value);
  },
  setErrorMsg({ commit }, payload) {
    commit("setErrorMsg", payload.value);
  },
  setSearchType({ commit,dispatch }, payload) {
    commit("setSearchType", payload);

    dispatch("data/doSearch", {}, { root: true });
  },
  setSearchTerm({ commit, dispatch }, payload) {
    commit("setSearchTerm", payload);
    if (payload !== "") {
      dispatch("data/doSearch", {}, { root: true });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
