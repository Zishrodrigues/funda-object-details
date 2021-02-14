<template>
  <dl :class="classes">
    <slot />
  </dl>
</template>

<script>
export default {
  name: 'DescriptionList',
  props: {
    classes: {
      type: String,
      required: false
    }
  }
};
</script>
