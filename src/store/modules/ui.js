const state = {
  isModalOpen: false,
  loader: 0,
  errorMsg: "",
  searchTerm: "",
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
  setSearchTerm({ commit, dispatch }, payload) {
    // store current search term --> used to know if search is active and display "no results message"
    commit("setSearchTerm", payload);
    if (payload !== "") {
      dispatch("data/doSearch", payload, { root: true });
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
