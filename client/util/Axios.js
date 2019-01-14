import axios from 'axios';
import { stringify } from 'qs';

const baseUrl = 'https://cnodejs.org/api/v1';
export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}${url}?${stringify(params)}`).then(res => {
      const data = res.data;
      if (data && data.success === true) {
        resolve(data);
      } else {
        reject(data);
      }
    }).catch(e => {
      if (e.response) {
        reject(e.response)
      } else {
        reject(data)
      }
    }).catch(reject);
  })
}