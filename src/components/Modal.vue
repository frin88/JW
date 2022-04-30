<template>
  <transition name="slide">
    <div v-if="isModalOpen" class="modal">
      <button class="modal--close" @click="toggleModal()">X</button>
      <MovieList
        v-if="movieList.length > 0"
        :actionable="false"
        :movieList="movieList"
      ></MovieList>
      <div v-else class="modal__empty">
        <p>No movies yet</p>
      </div>
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
      movieList: "data/watchList",
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

  &--close {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__empty {
    color: #fff;
    font-size: 1.5rem;
  }
}

.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(calc(-1 * 100vw));
  }
  to {
    transform: translateX(0);
  }
}
</style>
