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
    <div class="flex border-orange border-solid border-0 border-b-05">
      <div class="flex-1">
        <Image
          :imageSrc="currentObject.HoofdFoto"
          :imageSrcSmall="currentObject.Media[0].MediaItems[0].Url"
          :imageSrcMedium="currentObject.Media[0].MediaItems[1].Url"
          :imageSrcLarge="currentObject.Media[0].MediaItems[2].Url"
          :alt="currentObject.HoofdFoto"
          classes="block h-full w-full object-cover"
        />
      </div>
      <div class="flex-1 p-1">
        <Title>
          <template v-slot:title>
            {{currentObject.Adres}}
          </template>
          <template v-slot:subTitle>
            {{currentObject.Postcode}} {{currentObject.Plaats}}
          </template>
        </Title>

        <DescriptionList classes="mt-05">
          <DescriptionListItem>
            <template v-slot:description-t>
              Asking price
            </template>
            <template v-slot:description-d>
              {{objectPrice}}
            </template>
          </DescriptionListItem>
          <DescriptionListItem>
            <template v-slot:description-t>
              Number of rooms
            </template>
            <template v-slot:description-d>
              {{currentObject.AantalKamers}}
            </template>
          </DescriptionListItem>
        </DescriptionList>
      </div>
    </div>

    <ImageGrid
      v-if="currentObjectImages"
      :images="currentObjectImages"
    />

    <NextButton
      v-on:click="nextObject"
    />
  </template>
</template>

<script>
import { onMounted, computed } from 'vue';

// components
import Image from '@/components/ui/Image.vue';
import ErrorMessage from '@/components/ui/ErrorMessage.vue';
import Loader from '@/components/ui/Loader.vue';
import Title from '@/components/ui/Title.vue';
import DescriptionList from '@/components/ui/DescriptionList.vue';
import DescriptionListItem from '@/components/ui/DescriptionListItem.vue';
import ImageGrid from '@/components/ImageGrid.vue';
import NextButton from '@/components/NextButton.vue';

// hooks
import { useObjectData } from '@/hooks/useObjectData';

// services
import { formatPrice, getRandomObjectId } from '@/services/helpers';

export default {
  name: 'Object Detail',
  components: {
    Image,
    ImageGrid,
    ErrorMessage,
    Loader,
    Title,
    DescriptionList,
    DescriptionListItem,
    NextButton
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

    const nextObject = () => {
      const id = getRandomObjectId(currentObject.value.InternalId);
      getObject(id);
    };

    const objectPrice = computed(() => {
      return formatPrice(currentObject.value.Koopprijs);
    });

    return {
      currentObject,
      currentObjectImages,
      objectPrice,
      nextObject,
      loading,
      error
    };
  }
};
</script>
