export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || "GitHub error" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from GitHub" });
  }
}
