import WeatherService from '../../services/weather';

import * as types from './types';

// Actions for loading current weather data by city
export const loadCurrentWeatherStartAction = () => {
  return {
    type: types.LOAD_CURRENT_WEATHER_REQUEST,
  };
};
export const loadCurrentWeatherSuccessAction = (weather) => {
  return {
    type: types.LOAD_CURRENT_WEATHER_SUCCESS,
    payload: { weather },
  };
};
export const loadCurrentWeatherFailureAction = (message) => ({
  type: types.LOAD_CURRENT_WEATHER_FAILURE,
  payload: { message },
});

// Actions for loading weather forecast data by city
export const loadWeatherForecastSuccessAction = (forecast) => {
  return {
    type: types.LOAD_WEATHER_FORECAST_SUCCESS,
    payload: { forecast },
  };
};

export const loadCurrentWeather = (city, date) => (dispatch) => {
  const formatDate = date
    ? parseInt((new Date(date).getTime() / 1000).toFixed(0))
    : date;
  dispatch(loadCurrentWeatherStartAction);

  WeatherService.fetchCurrentWeather(city, formatDate)
    .then((data) => {
      dispatch(loadCurrentWeatherSuccessAction(data));
      dispatch(loadWeatherForecastSuccessAction(data?.days));
    })
    .catch((error) => {
      dispatch(loadCurrentWeatherFailureAction(error.response.data));
    });
};

// Actions for loading weather history data by city
export const loadWeatherHistoryStartAction = () => {
  return {
    type: types.LOAD_WEATHER_HISTORY_REQUEST,
  };
};
export const loadWeatherHistorySuccessAction = (history) => {
  return {
    type: types.LOAD_WEATHER_HISTORY_SUCCESS,
    payload: { history },
  };
};
export const loadWeatherHistoryFailureAction = (message) => ({
  type: types.LOAD_WEATHER_HISTORY_FAILURE,
  payload: { message },
});

export const loadWeatherHistory = (city, date) => (dispatch) => {
  const currentDate = date ? new Date(date) : new Date();
  console.log(currentDate, 'history');
  console.log(date, 'datehis');
  const startDate = currentDate.toISOString().slice(0, -5);

  let endDate = new Date();
  endDate.setDate(currentDate.getDate() - 15);
  endDate = endDate.toISOString().slice(0, -5);
  console.log(startDate, endDate);

  dispatch(loadWeatherHistoryStartAction);

  WeatherService.fetchHistory(city, startDate, endDate)
    .then((data) => {
      dispatch(
        loadWeatherHistorySuccessAction(
          data.locations[Object.keys(data.locations)[0]].values,
        ),
      );
    })
    .catch((error) => {
      dispatch(loadWeatherHistoryFailureAction(error.response?.data));
    });
};
