import axios from 'axios';

const API = axios.create({
  baseURL:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/',
  params: {
    key: '7Q7GPLHUTGNP7QMYTFWLZDVD7',
    unitGroup: 'metric',
    contentType: 'json',
    iconSet: 'icons2',
  },
});

const WeatherService = {
  fetchCurrentWeather: (city, date) => {
    const endpoint = `/timeline/${city}${date ? `/${date}` : ''}`;
    console.log(endpoint);
    return API.get(endpoint).then(({ data }) => {
      return data;
    });
  },
  fetchHistory: (location, endDateTime, startDateTime) =>
    API.get('/weatherdata/history?&aggregateHours=24', {
      params: { location, startDateTime, endDateTime },
    }).then(({ data }) => {
      return data;
    }),
};

export default WeatherService;
