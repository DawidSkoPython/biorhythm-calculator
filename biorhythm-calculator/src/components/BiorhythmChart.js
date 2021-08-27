import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorhythms, calculateBiorhythmSeries } from "../calculations";
import dayjs from "dayjs";

const data = [
  { date: "2020-02-01", physical: 0.99, emotional: 0.5, intellectual: -0.27 },
  { date: "2020-02-02", physical: 0.37, emotional: -0.59, intellectual: -0.85 },
  { date: "2020-02-03", physical: -0.1, emotional: 0.99, intellectual: 0.48 },
];

function BiorhythmChart({ birthDate, targetDate }) {
  const startDate = dayjs(targetDate).substract(15, "days").toISOString();

  const data = calculateBiorhythmSeries(birthDate, startDate, 31);

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" />

        <Line dataKey="physical" stroke="green" />
        <Line dataKey="emotional" stroke="red" />
        <Line dataKey="intellectual" stroke="blue" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BiorhythmChart;
