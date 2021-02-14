<template>
  <h1>
    <slot name="title" />
    <span
      v-if="hasSubTitle"
      class="block"
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
