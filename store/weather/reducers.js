import * as types from './types';

const initialState = {
  weather: {},
  history: [],
  forecast: [],
  error: '',
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_CURRENT_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        weather: action.payload.weather,
      };
    case types.LOAD_WEATHER_FORECAST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        forecast: action.payload.forecast,
      };
    case types.LOAD_CURRENT_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case types.LOAD_WEATHER_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_WEATHER_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        history: action.payload.history,
      };
    case types.LOAD_WEATHER_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return { ...state };
  }
}
