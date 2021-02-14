<template>
  <img
    :src="imageSrc"
    :srcset="`
      ${imageSrcMedium ? imageSrcMedium + ' 640w': ''}
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
    classes: {
      type: String,
      required: false
    }
  }
};
</script>
