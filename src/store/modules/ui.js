const state = {
  isModalOpen: false,
  loader: 0,
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
};

const getters = {
  isModalOpen: (state) => state.isModalOpen,
  isLoading: (state) => state.loader > 0,
};

const actions = {
  toggleModal({ commit }) {
    commit("toggleModal");
  },
  toggleLoader({ commit }, payload) {
    commit("toggleLoader", payload.value);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
