<template>
  <div :class="classes">
    <div
      class="
        absolute
        top-1
        right-1
        cursor-pointer
        z-80
        bg-white
        p-1
      "
      @click="closeLightbox"
    >
      Close
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: {
    classes: {
      type: String,
      required: false,
      default: `
        fixed
        top-0
        left-0
        bottom-0
        right-0
        bg-white
      `
    }
  },
  methods: {
    closeLightbox() {
      this.$emit('close');
    }
  }
};
</script>
