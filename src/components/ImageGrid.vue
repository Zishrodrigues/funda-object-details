<template>
  <Grid>
    <GridItem>
      Image
    </GridItem>
  </Grid>
</template>

<script>
// components
import Grid from '@/components/ui/Grid.vue';
import GridItem from '@/components/ui/GridItem.vue';

export default {
  name: 'ImageGrid',
  components: {
    Grid,
    GridItem
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    //
  }
};
</script>
