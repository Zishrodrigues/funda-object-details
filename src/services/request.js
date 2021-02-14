import axios from 'axios';

export const request = async(url, data = {}) => {
  const axiosOptions = {
    method: 'GET',
    url: url,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (data) {
    axiosOptions.params = data;
  }

  return axios(axiosOptions);
};
