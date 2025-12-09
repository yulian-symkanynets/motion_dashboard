import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export type FrankfurterHistoricalResponse = {
  amount: number;
  base: string;
  start_date: string;
  end_date: string;
  rates: {
    [date: string]: {
      [currency: string]: number;
    };
  };
};

function Activity() {
  const [activity, setActivity] =
    React.useState<FrankfurterHistoricalResponse | null>(null);

  const getActivity = async () => {
    const today = new Date();

    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    const currentDateString = `${year}-${month}-0${date}`;
    const lastWeekDate = `${year}-${month}-0${date - 7}`;

    console.log(currentDateString);
    console.log(lastWeekDate);

    const response = await fetch(
      `https://api.frankfurter.dev/v1/${lastWeekDate}..${currentDateString}?symbols=USD`
    );
    const data = await response.json();
    setActivity(data);
    return data;
  };

  React.useEffect(() => {
    getActivity().then((data) => console.log(data));
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels: activity ? Object.keys(activity.rates) : [],
    datasets: [
      {
        label: "USD Exchange Rate",
        data: activity
          ? Object.values(activity.rates).map((rate) => rate["USD"])
          : [],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="flex">
      {activity ? (
        <Line data={data} options={options} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Activity;
