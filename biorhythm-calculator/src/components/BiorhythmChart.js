import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis } from "recharts";
import { calculateBiorhythmSeries } from "../calculations";
import dayjs from "dayjs";
import "./BiorhythmChart.css";

// const data = [
//   { date: "2020-02-01", physical: 0.99, emotional: 0.5, intellectual: -0.27 },
//   { date: "2020-02-02", physical: 0.37, emotional: -0.59, intellectual: -0.85 },
//   { date: "2020-02-03", physical: -0.1, emotional: 0.99, intellectual: 0.48 },
// ];

function formatDate(isoString) {
  return dayjs(isoString).format("D MMM");
}

function BiorhythmChart({ birthDate, targetDate }) {
  const startDate = dayjs(targetDate).subtract(15, "days").toISOString();

  const data = calculateBiorhythmSeries(birthDate, startDate, 31).map((item) => ({ ...item, date: formatDate(item.date) }));

  return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="date" ticks={[data[3].date, data[15].date, data[27].date]} />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line type="natural" dot={false} dataKey="emotional" className="emotional" />
        <Line type="natural" dot={false} dataKey="intellectual" className="intellectual" />
        <Line type="natural" dot={false} dataKey="physical" className="physical" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BiorhythmChart;
