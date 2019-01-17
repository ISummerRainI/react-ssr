import axios from 'axios';
import { stringify } from 'qs';

const baseUrl = 'https://cnodejs.org/api/v1';

// eslint-disable-next-line import/prefer-default-export
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}${url}?${stringify(params)}`).then((res) => {
      const { data } = res;
      if (data && data.success === true) {
        resolve(data);
      } else {
        reject(data);
      }
    }).catch((e) => {
      if (e) {
        reject(e)
      }
    }).catch(reject);
  })
}
