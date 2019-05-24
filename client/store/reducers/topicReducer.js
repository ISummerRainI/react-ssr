import { SAVE } from '../actions/topicAction';

const initialState = {
  topicDetail: {},
  topics: [],
}

export default function (state = initialState, action) {
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case SAVE: {
      return {
        ...state,
        ...payload,
      }
    }
    default:
      return state;
  }
}
