const state = {
  isModalOpen: false,
};

const mutations = {
  toggleModal(state, payload) {
    state.isModalOpen = payload;
  },
};

const getters = {
  isModalOpen: (state) => state.isModalOpen,
};

const actions = {
  toggleModal({ commit }, payload) {
    commit("toggleModal", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
