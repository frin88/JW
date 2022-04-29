<template>
  <div id="app">
    <Header></Header>
    <MovieList v-if="movieList" :movieList="movieList"></MovieList>
    <Modal></Modal>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MovieList from "./components/MovieList.vue";
import Modal from "./components/Modal.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    MovieList,
    Modal,
  },
  computed: {
    ...mapGetters({
      movieList: "data/resultList",
      isModalOpen: "ui/isModalOpen",
    }),
  },
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Montserrat);
/* minimal css reset */
body {
  font-family: "Montserrat", "Helevtica", sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

*,
::before,
::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

a,
button {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
}
button {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  white-space: nowrap;

  // custom styles. i would normally put these in a scss file but this is a quick and dirty solution
  padding: 10px;
  background-color: #fbc500;
  color: black;
  border-radius: 5px;

  display: flex;
  align-content: center;
  justify-content: center;
  transition: opacity 0.2s ease;

  &:hover:not(:disabled) {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
