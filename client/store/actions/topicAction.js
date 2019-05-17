import { get } from 'util/Axios';

export const SAVE = 'SAVE';

export function getTopicAction(params) {
  return new Promise((resolve, reject) => {
    get('/topics', params).then((res) => {
      const {
        data,
      } = res;
      resolve({
        type: SAVE,
        payload: {
          topics: data,
        },
      })
    });
  });
}

export function getTopicDetailAction(params) {
  const {
    id,
    mdrender,
  } = params;
  return new Promise((resolve, reject) => {
    get(`/topic/${id}`, {
      mdrender,
    }).then((res) => {
      const {
        data,
      } = res;
      resolve({
        type: SAVE,
        payload: {
          topicDetail: data,
        },
      })
    })
  })
}

export function clearTopicDetailAction() {
  return ({
    type: SAVE,
    payload: {
      topicDetail: {},
    },
  })
}
