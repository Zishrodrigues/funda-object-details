import { reactive, toRefs } from 'vue';

// services
import { request } from '@/services/request';

const state = reactive({
  currentObject: null,
  loading: false,
  error: ''
});

export const useObjectData = () => {
  const getObject = (id = '6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6') => { // default object key
    if (!process.env.VUE_APP_API_KEY) {
      state.error = 'Looks like you\'re missing the right credentials. Try adding your API key to the .env file.';
      return;
    }
    state.loading = true;
    request(
      `${process.env.VUE_APP_API_URL}feeds/Aanbod.svc/json/detail/${process.env.VUE_APP_API_KEY}/koop/${id}`
    ).then(
      (response) => {
        state.loading = false;
        console.log('response', response);
        state.currentObject = response.data;
      },
      (error) => {
        console.log('error', error);
        state.error = 'Something went wrong while fetching the data.';
        state.loading = false;
      }
    );
  };

  return {
    ...toRefs(state),
    getObject
  };
};
