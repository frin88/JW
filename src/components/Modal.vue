<template>
  <transition name="slide">
    <div v-if="isModalOpen" class="modal">
      <button class="modal--close" @click="toggleModal()">X</button>
      <h1 class="modal__title">Selected Titles</h1>
      <MovieList
        :actionable="false"
        :movieList="watchList"
        emptyMsg="No movie in your watch list yet "
      ></MovieList>
    </div>
  </transition>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import MovieList from "./MovieList.vue";
export default {
  components: {
    MovieList,
  },

  computed: {
    ...mapGetters({
      watchList: "data/watchList",
      isModalOpen: "ui/isModalOpen",
    }),
  },
  methods: {
    ...mapActions({ toggleModal: "ui/toggleModal" }),
  },
};
</script>
<style lang="scss" scoped>
.modal {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  z-index: 2;
  padding: 20px;
  flex-direction: column;

  &--close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__empty,
  &__title {
    color: #fff;
    font-size: 1.5rem;
  }
}

.slide-enter-active {
  animation: slide-in 0.8s;
}
.slide-leave-active {
  animation: slide-in 0.8s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: translateX(0);
  }
}
</style>
