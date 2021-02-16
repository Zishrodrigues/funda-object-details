import { reactive, toRefs } from 'vue';

// services
import { request } from '@/services/request';
import { filterMediaForImages } from '@/services/helpers';

const state = reactive({ // making the state object reactive so Vue always returns the same proxy for it
  currentObject: null,
  currentObjectImages: null,
  loading: false,
  error: ''
});

const hasCredentials = () => {
  if (!process.env.VUE_APP_API_KEY) {
    state.error = 'Looks like you\'re missing the right credentials. Try adding your API key to the .env file.';
    return false;
  }
  return true;
};

export const useObjectData = () => {
  const getObject = (id = '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6') => { // default object key
    if (!hasCredentials()) return;
    state.loading = true;
    request(
      `${process.env.VUE_APP_API_URL}feeds/Aanbod.svc/json/detail/${process.env.VUE_APP_API_KEY}/koop/${id}`
    ).then(
      (response) => {
        state.loading = false;
        state.currentObject = response.data;
        state.currentObjectImages = filterMediaForImages(response.data.Media);
      },
      () => {
        state.error = 'Something went wrong while fetching the data.';
        state.loading = false;
      }
    );
  };

  return {
    ...toRefs(state), // using toRefs to avoid losing reactivity, converting each prop to it's own ref
    getObject
  };
};
