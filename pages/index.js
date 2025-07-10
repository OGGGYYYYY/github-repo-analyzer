import { useState } from "react";
import RepoTable from "../components/RepoTable";
import LanguageChart from "../components/LanguageChart";
import RepoSummary from "../components/RepoSummary";

export default function Home() {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRepos = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/github?username=${username}`);
      const data = await res.json();
      if (res.ok) setRepos(data);
      else setError(data.error || "Something went wrong");
    } catch (err) {
      setError("Failed to fetch");
    }
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">GitHub Repo Analyzer</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-64 px-4 py-2 rounded border border-gray-300 text-black bg-white shadow focus:outline-none focus:ring-2 focus:ring-blue-500"

        />
        <button
          onClick={fetchRepos}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"

        >
          Analyze
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {repos.length > 0 && (
        <>
          <RepoSummary repos={repos} />
          <RepoTable repos={repos} />
          <LanguageChart repos={repos} />
        </>
      )}

    </main>
  );
}
