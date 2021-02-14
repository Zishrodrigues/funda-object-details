<template>
  Object detail page: {{currentObject}}
</template>

<script>
import { onMounted } from 'vue';

// hooks
import { useObjectData } from '@/hooks/useObjectData';

export default {
  name: 'Object Detail',
  components: {
    //
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
