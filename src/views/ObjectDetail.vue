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
    <Image
      :imageSrc="currentObject.HoofdFoto"
      :alt="`Picture of ${currentObject.Adres}`"
    />
  </template>
</template>

<script>
import { onMounted } from 'vue';

// components
import Image from '@/components/ui/Image.vue';
import ErrorMessage from '@/components/ui/ErrorMessage.vue';
import Loader from '@/components/ui/Loader.vue';

// hooks
import { useObjectData } from '@/hooks/useObjectData';

export default {
  name: 'Object Detail',
  components: {
    Image,
    ErrorMessage,
    Loader
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
