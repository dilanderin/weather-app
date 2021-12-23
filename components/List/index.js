export const List = ({ list }) => {
  console.log(list);

  return (
    <div className="overflow-x-auto overflow-hidden transition-all ease-in-out">
      <table className="table-auto w-100">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-2 text-xs text-gray-500">Date</th>
            <th className="px-6 py-2 text-xs text-gray-500">Conditions</th>
            <th className="px-6 py-2 text-xs text-gray-500">Temperature</th>
            <th className="px-6 py-2 text-xs text-gray-500">Humidity</th>
            <th className="px-6 py-2 text-xs text-gray-500">Wind</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {list.map((day) => (
            <tr className="whitespace-nowrap" key={day.datetime}>
              <td className="px-6 py-4">
                {new Date(day.datetime).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">{day.conditions}</td>
              <td className="px-6 py-4">{day.temp}</td>
              <td className="px-6 py-4">{day.humidity}</td>
              <td className="px-6 py-4">
                {day.wgust || day.windgust} - {day.wdir || day.winddir} -{' '}
                {day.windchill | day.windspeed}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
