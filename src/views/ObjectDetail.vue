<template>
  <ErrorMessage
   v-if="error"
  >
    {{error}}
  </ErrorMessage>

  <Loader
    v-if="loading"
  />

  <template v-if="currentObject">
    <div class="flex detailsContainer">
      <div class="flex-1">
        <Image
          :imageSrc="currentObject.HoofdFoto"
          :alt="currentObject.HoofdFoto"
          classes="block h-full w-full object-cover"
        />
      </div>
      <div class="flex-1">
        <Title>
          <template v-slot:title>
            {{currentObject.Adres}}
          </template>
          <template v-slot:subTitle>
            {{currentObject.Postcode}} {{currentObject.Plaats}}
          </template>
        </Title>
      </div>
    </div>

    <ImageGrid
      v-if="currentObjectImages"
      :images="currentObjectImages"
    />
  </template>
</template>

<script>
import { onMounted } from 'vue';

// components
import Image from '@/components/ui/Image.vue';
import ErrorMessage from '@/components/ui/ErrorMessage.vue';
import Loader from '@/components/ui/Loader.vue';
import Title from '@/components/ui/Title.vue';
import ImageGrid from '@/components/ImageGrid.vue';

// hooks
import { useObjectData } from '@/hooks/useObjectData';

export default {
  name: 'Object Detail',
  components: {
    Image,
    ImageGrid,
    ErrorMessage,
    Loader,
    Title
  },
  setup() {
    const {
      currentObject,
      currentObjectImages,
      getObject,
      loading,
      error
    } = useObjectData();

    onMounted(() => {
      getObject();
    });

    return {
      currentObject,
      currentObjectImages,
      loading,
      error
    };
  }
};
</script>
