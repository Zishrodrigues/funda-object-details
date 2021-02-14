<template>
  <li :class="classes">
    <slot />
  </li>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    classes: {
      type: String,
      required: false
    }
  }
};
</script>
