const state = {
  isModalOpen: false,
};

const mutations = {
  toggleModal(state) {
    console.log("qui");
    state.isModalOpen = !state.isModalOpen;
  },
};

const getters = {
  isModalOpen: (state) => state.isModalOpen,
};

const actions = {
  toggleModal({ commit }) {
    commit("toggleModal");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
