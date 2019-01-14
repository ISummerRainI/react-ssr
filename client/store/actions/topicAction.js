import { get } from 'util/Axios';

export const SAVE = 'SAVE';

export function getTopic(dispatch, params) {
  return get(`/topics`, params).then(res => {
    const {
      data
    } = res;
    dispatch({
      type: SAVE,
      payload: {
        topics: data
      }
    })
  });
}

export function getTopicDetail(dispatch, params) {
  const {
    id,
    mdrender
  } = params;
  return get(`/topic/${id}`, {
    mdrender
  }).then(res => {
    const {
      data
    } = res;
    dispatch({
      type: SAVE,
      payload: {
        topicDetail: data
      }
    })
  })
}

export function clearTopicDetail(dispatch) {
  dispatch({
    type: SAVE,
    payload: {
      topicDetail: {}
    }
  })
}