<template>
  <div class="search-bar">
    <input
      placeholder="Type to search for movies"
      class="search-bar-input"
      type="search"
      v-model="userInput"
    />

    <!-- <div>searching for {{ searchTerm }}</div> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      timeout: null,
      searchTerm: "",
    };
  },
  computed: {
    userInput: {
      get() {
        return this.searchTerm;
      },
      set(val) {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          if (val != "") {
            this.searchTerm = val;
            this.doSearch(val);
          } else {
            this.setResultList([]);
          }

          console.log(val);
        }, 500);
      },
    },
  },
  methods: {
    ...mapActions({
      doSearch: "data/doSearch",
      setResultList: "data/setResultList",
    }),
  },
};
</script>


<style scoped lang="scss">
.search-bar {
  max-width: 500px;
  display: flex;
  flex-grow: 1;

  input {
    border: 0;
    flex: 1;
    height: 100%;
    padding: 10px 20px;
    background: #fff;
    border-radius: 3px;

    &:focus {
      outline: none;
    }
  }
}
</style>
