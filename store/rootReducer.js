import { combineReducers } from 'redux';
import weather from './weather/reducers';

const rootReducers = combineReducers({
  weather,
});

export default rootReducers;
