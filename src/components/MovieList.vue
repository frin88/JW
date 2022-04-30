
<template>
  <div class="movies">
    <div v-for="m in movieList" class="movies__item" :key="m.id">
      <div
        role="img"
        aria-label="movie-cover"
        class="movies__item--cover"
        :style="{
          backgroundImage: `url(${m.image})`,
        }"
      ></div>
      <div class="movies__item__content">
        <div class="movies__item__content__info">
          <div class="movies__item__content__info--title">
            {{ m.title }}
          </div>
          <div class="movies__item__content__info--year">
            Release year: {{ m.releaseYear }}
          </div>
          <div class="movies__item__content__info--rating">
            IMDb rating: {{ m.imDbRating ? m.imDbRating : "N/A" }}
          </div>
        </div>
        <button
          v-if="actionable"
          :disabled="m.inWatchList"
          @click="addToWatchList(m)"
        >
          Add to Watchlist
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "movieList",

  props: {
    movieList: {
      type: Array,
      required: true,
    },
    actionable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    ...mapActions({
      addToWatchList: "data/addItemToWatchList",
    }),
  },
};
</script>

<style lang="scss" scoped>
.movies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: flex-start;
  height: 100%;
  width: 100%;

  overflow: auto;
  padding: 20px;

  &__item {
    height: 300px;
    flex: calc(100% - 30px) 1 0;

    border: 1px solid rgb(142, 142, 142);

    background-color: transparent;
    border-radius: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);

    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 15px;

    @media (min-width: 801px) {
      flex: calc(50% - 20px) 0 0;
      margin: 10px;
    }

    @media (min-width: 1281px) {
      flex: calc(33% - 20px) 0 0;
    }

    &--cover {
      min-width: 180px;
      height: 90%;
      border-radius: 5px;
      flex-grow: 1;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-left: 15px;
      padding: 5px 0;
      height: 90%;
      width: 100%;
      color: white;
      text-align: left;

      &__info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &--title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 10px;
          padding: 5px 0;
        }

        &--year,
        &--rating {
          color: rgb(142, 142, 142);
          padding: 2px 0;
          font-size: 1rem;
          font-weight: normal;
        }
      }

      button {
        align-self: flex-end;
      }
    }
  }
}
</style>
