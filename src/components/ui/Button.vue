<template>
  <button
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    classes: {
      type: String,
      required: false
    }
  }
};
</script>
