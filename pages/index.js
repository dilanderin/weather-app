import { Results } from '../components/Results';
import { List } from '../components/List';
import { Button } from '../components/Button';

import { useSelector, useDispatch } from 'react-redux';
import {
  loadCurrentWeather,
  loadWeatherHistory,
} from '../store/weather/actions';

import { useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = ({ city }) => {
  const dispatch = useDispatch();
  const [date, onChange] = useState(new Date());
  const [showHistory, setShowHistory] = useState(false);
  const [showForecast, setShowForecast] = useState(true);

  const {
    weather: { weather, error, loading, forecast, history },
  } = useSelector(({ weather }) => ({ weather }));

  useEffect(() => {
    if (city) {
      dispatch(loadCurrentWeather(city));
      dispatch(loadWeatherHistory(city));
    }
  }, [city]);
  const [isServer, setIsServer] = useState(true);

  useEffect(() => setIsServer(typeof window === `undefined`), []);

  return (
    <>
      <div className="flex justify-between mt-5">
        <div className="mr-3">
          {Object.keys(weather).length ? (
            <Results weather={weather} />
          ) : (
            <div>No result found</div>
          )}

          {error && <div>Something happened. {error}</div>}

          {loading && <div>Loading...</div>}

          <div className="mt-5">
            <Button
              onClick={() => {
                setShowForecast(false);
                setShowHistory(!showHistory);
              }}
            >
              {showHistory ? 'Hide' : 'Show'} History List
            </Button>

            <Button
              onClick={async () => {
                setShowHistory(false);
                setShowForecast(!showForecast);
              }}
            >
              {showForecast ? 'Hide' : 'Show'} Forecast List
            </Button>

            <div className="mt-3">
              {showHistory &&
                (history?.length > 0 ? (
                  <List list={history} />
                ) : (
                  <div>No history to show</div>
                ))}
              {showForecast &&
                (forecast?.length > 1 ? (
                  <List list={forecast} />
                ) : (
                  <div>No forecast to show</div>
                ))}
            </div>
          </div>
        </div>

        {!isServer && (
          <Calendar
            instanceId="calendar-weather"
            className="h-max"
            onChange={(val) => {
              onChange(val);
              dispatch(loadCurrentWeather(city, date));
              dispatch(loadWeatherHistory(city, date));
            }}
            value={date}
          />
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  let { city } = context.query;
  if (!city) {
    city = 'paris';
  }
  return { props: { city: city } };
};

export default Home;
