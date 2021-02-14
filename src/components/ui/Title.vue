<template>
  <h1 class="text-dark text-lg">
    <slot name="title" />
    <span
      v-if="hasSubTitle"
      class="block text-subtle text-base"
    >
      <slot name="subTitle" />
    </span>
  </h1>
</template>

<script>
export default {
  name: 'Title',
  computed: {
    hasSubTitle() {
      return this.$slots['subTitle'];
    }
  }
};
</script>
