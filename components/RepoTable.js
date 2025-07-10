export default function RepoTable({ repos }) {
  return (
    <div className="w-full max-w-4xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Public Repositories</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Name</th>
            <th className="p-2">Stars</th>
            <th className="p-2">Forks</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id} className="border-t">
              <td className="p-2">{repo.name}</td>
              <td className="p-2">{repo.stargazers_count}</td>
              <td className="p-2">{repo.forks_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
