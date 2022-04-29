<template>
  <div id="app">
    <Header></Header>
    <MovieList></MovieList>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import MovieList from "./components/MovieList.vue";

export default {
  name: "App",
  components: {
    Header,
    MovieList,
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

  &:hover:not(:disabled) {
    cursor: pointer;
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
