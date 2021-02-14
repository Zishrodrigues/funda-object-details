<template>
  <Grid>
    <GridItem
      v-for="(image, index) in images"
      :key="`image_${index}`"
      @click="toggleLightbox(index)"
      classes="cursor-pointer"
    >
      <Image
        :imageSrc="image.small"
        :imageSrcSmall="image.Small"
        :imageSrcMedium="image.medium"
        alt="Picture of address"
        classes="block w-full"
      />
    </GridItem>
  </Grid>

  <Lightbox
      v-if="showLightbox"
      v-on:close="toggleLightbox"
    >
      <Image
        :imageSrc="this.images[imageIndex].large"
        alt="Picture of address"
        classes="
          block
          object-contain
          max-w-full
          h-full
          m-center
        "
      />
    </Lightbox>
</template>

<script>
// components
import Grid from '@/components/ui/Grid.vue';
import GridItem from '@/components/ui/GridItem.vue';
import Image from '@/components/ui/Image.vue';
import Lightbox from '@/components/ui/Lightbox.vue';

export default {
  name: 'ImageGrid',
  components: {
    Grid,
    GridItem,
    Image,
    Lightbox
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showLightbox: false,
      imageIndex: null
    };
  },
  methods: {
    toggleLightbox: function(imgIndex = null) {
      this.imageIndex = imgIndex;
      this.showLightbox = !this.showLightbox;
    }
  }
};
</script>
