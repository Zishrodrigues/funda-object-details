import axios from 'axios';

const corsUrl = 'https://thingproxy.freeboard.io/fetch/'; // Avoiding CORS during development by using a proxy

export const request = async(url, data = {}) => {
  const axiosOptions = {
    method: 'GET',
    url: corsUrl + url,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (data) {
    axiosOptions.params = data;
  }

  return axios(axiosOptions);
};
