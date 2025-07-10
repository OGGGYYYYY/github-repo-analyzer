export default function RepoSummary({ repos }) {
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
  const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
  const mostStarred = repos.reduce((top, repo) =>
    repo.stargazers_count > top.stargazers_count ? repo : top,
    { stargazers_count: -1 }
  );

  return (
    <div className="bg-white shadow-md rounded p-6 w-full max-w-xl text-center mt-8">
      <h2 className="text-xl font-semibold mb-4">📊 Repository Summary</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm sm:text-base">
        <div>
          <p className="font-semibold text-blue-600">{repos.length}</p>
          <p>Total Repos</p>
        </div>
        <div>
          <p className="font-semibold text-yellow-500">{totalStars}</p>
          <p>Total Stars</p>
        </div>
        <div>
          <p className="font-semibold text-purple-500">{totalForks}</p>
          <p>Total Forks</p>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <p className="font-semibold text-green-600">
            ⭐ {mostStarred?.name || "N/A"}
          </p>
          <p>Most Starred Repo</p>
        </div>
      </div>
    </div>
  );
}
