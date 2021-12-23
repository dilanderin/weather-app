import Image from 'next/image';

export const Results = ({ weather }) => {
  return (
    <div className="flex">
      {weather.days[0].icon && (
        <div className="bg-yellow-400 rounded-full h-max align-center flex p-5">
          <Image
            src={`/images/weather-icons/${weather.days[0].icon}.png`}
            width={110}
            height={110}
          />
        </div>
      )}

      <div className="ml-4">
        {weather.description && (
          <div>
            <b>Weather: </b>
            {weather.description}
          </div>
        )}

        {weather.days[0].temp && (
          <div>
            <b>Temperature: </b>
            {weather.days[0].temp}
          </div>
        )}

        <div>
          {typeof weather.days[0].winddir === 'number' && (
            <span>
              <b>Wind Direction:</b> {weather.days[0].winddir} -{' '}
            </span>
          )}
          {typeof weather.days[0].windgust === 'number' && (
            <span>
              <b>Wind Gust: </b> {weather.days[0].windgust} -{' '}
            </span>
          )}
          {typeof weather.days[0].windspeed === 'number' && (
            <span>
              <b>Wind Speed:</b> {weather.days[0].windspeed}
            </span>
          )}
        </div>

        {weather.days[0].humidity && (
          <div>
            <b>Humidity:</b> {weather.days[0].humidity}
          </div>
        )}
      </div>
    </div>
  );
};
