import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00c49f",
  "#ff6f91", "#a28cf1", "#0088FE", "#FFBB28", "#FF8042"
];

export default function LanguageChart({ repos }) {
  // Count how many repos use each language
  const languageCount = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
    }
  });

  const data = Object.entries(languageCount)
  .sort((a, b) => b[1] - a[1]) // sort descending
  .slice(0, 10) // only top 10 languages
  .map(([lang, count]) => ({ name: lang, value: count }));


  if (data.length === 0) return <p>No language data available.</p>;

  return (
    <div className="w-full max-w-2xl mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Languages Used</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name }) => name}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
