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

  
}
