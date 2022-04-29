<template>
  <header class="menu">
    <SearchBar></SearchBar>
   
    <button @click="openModal()">Your Watchlist  </button>
  </header>
</template>
<script>
import SearchBar from "./SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  

  methods: {
    openModal() {
      console.log("openModal");
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100px;

  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #fff;


}
</style>
