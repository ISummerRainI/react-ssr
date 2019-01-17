import { combineReducers } from 'redux';
import topicReducer from './topicReducer';

const allReducers = {
  topic: topicReducer,
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;
