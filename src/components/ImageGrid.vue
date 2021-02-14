<template>
  <Grid>
    <GridItem
      v-for="(image, index) in images"
      :key="`image_${index}`"
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
</template>

<script>
// components
import Grid from '@/components/ui/Grid.vue';
import GridItem from '@/components/ui/GridItem.vue';
import Image from '@/components/ui/Image.vue';

export default {
  name: 'ImageGrid',
  components: {
    Grid,
    GridItem,
    Image
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>
