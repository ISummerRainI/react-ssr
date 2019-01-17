import { get } from 'util/Axios';

export const SAVE = 'SAVE';

export function getTopicAction(params) {
  return (dispatch) => {
    get('/topics', params).then((res) => {
      const {
        data,
      } = res;
      dispatch({
        type: SAVE,
        payload: {
          topics: data,
        },
      })
    });
  }
}

export function getTopicDetailAction(params) {
  return (dispatch) => {
    const {
      id,
      mdrender,
    } = params;
    get(`/topic/${id}`, {
      mdrender,
    }).then((res) => {
      const {
        data,
      } = res;
      dispatch({
        type: SAVE,
        payload: {
          topicDetail: data,
        },
      })
    })
  }
}

export function clearTopicDetailAction() {
  return (dispatch) => {
    dispatch({
      type: SAVE,
      payload: {
        topicDetail: {},
      },
    })
  }
}
