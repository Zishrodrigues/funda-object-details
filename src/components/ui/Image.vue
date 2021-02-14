<template>
  <img
    v-lazy="imageSrc"
    :srcset="`
      ${imageSrcLarge ? imageSrcLarge + ' 700w,': ''}
      ${imageSrcMedium ? imageSrcMedium + ' 640w,': ''}
      ${imageSrcSmall ? imageSrcSmall + ' 320w': ''}
    `"
    :alt="alt"
    :class="classes"
  >
</template>

<script>
export default {
  name: 'Image',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    imageSrcSmall: {
      type: String,
      required: false
    },
    imageSrcMedium: {
      type: String,
      required: false
    },
    imageSrcLarge: {
      type: String,
      required: false
    },
    classes: {
      type: String,
      required: false
    },
    lazyLoad: {
      type: Boolean,
      required: false
    }
  }
};
</script>
