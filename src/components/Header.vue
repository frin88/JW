<template>
  <header class="menu">
    <div class="menu__search">
      <SearchBar></SearchBar>
      <ContentSwitcher
        @select="setSearchType($event)"
        :content="switcherItems"
      ></ContentSwitcher>
    </div>
    <button @click="openModal()">Selected Titles</button>
  </header>
</template>
<script>
import SearchBar from "./SearchBar.vue";
import ContentSwitcher from "./ContentSwitcher.vue";
import { mapActions } from "vuex";

export default {
  components: {
    SearchBar,
    ContentSwitcher,
  },
  data() {
    return {
      // this would be an Enum
      switcherItems: [
        {
          value: "movies",
          label: "Movies",
          active: true,
        },
        {
          value: "series",
          label: "Series",
          active: false,
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      openModal: "ui/toggleModal",
      setSearchType: "ui/setSearchType",
    }),
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

  &__search {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
  }
}
</style>
