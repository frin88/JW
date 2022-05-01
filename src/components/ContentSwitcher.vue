<template>
  <div class="content-switcher">
    <button
      :class="['content-switcher-item', { active: index === selectedIndex }]"
      v-for="(item, index) in content"
      @click="click(index)"
      :key="index"
    >
      {{ item.label }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    click(index) {
      if (this.selectedIndex === index) {
        return;
      }
      this.selectedIndex = index;
      this.content.forEach((element, i) => {
        element.active = false;
        if (i === index) {
          element.active = true;
        }
      });
      this.$emit("select",  this.content[index].value);
    },
  },
};
</script>
<style lang="scss" scoped>
.content-switcher {
  display: flex;
  margin: 10px;

  &-item {
    margin: 0 5px;

    &:not(.active) {
      background-color: gray;
    }
  }
}
</style>
