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
  </template>
</template>

<script>
import { onMounted } from 'vue';

// components
import Image from '@/components/ui/Image.vue';
import ErrorMessage from '@/components/ui/ErrorMessage.vue';
import Loader from '@/components/ui/Loader.vue';
import Title from '@/components/ui/Title.vue';

// hooks
import { useObjectData } from '@/hooks/useObjectData';

export default {
  name: 'Object Detail',
  components: {
    Image,
    ErrorMessage,
    Loader,
    Title
  },
  setup() {
    const {
      currentObject,
      getObject,
      loading,
      error
    } = useObjectData();

    onMounted(() => {
      getObject();
    });

    return {
      currentObject,
      loading,
      error
    };
  }
};
</script>
