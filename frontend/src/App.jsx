import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://url-shortener-production-0af9.up.railway.app";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [copied, setCopied] = useState(false);

  const getUrls = async () => {
    const response = await fetch(`${API_URL}/all`);
    const data = await response.json();
    setUrls(data);
  };

  useEffect(() => {
    getUrls();
  }, []);

  const shortenUrl = async () => {
    if (!url) return;

    const response = await fetch(`${API_URL}/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        original_url: url,
      }),
    });

    const data = await response.json();

    setShortUrl(data.short_url);
    setCopied(false);
    setUrl("");

    getUrls();
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  const deleteUrl = async (shortCode) => {
    await fetch(`${API_URL}/delete/${shortCode}`, {
      method: "DELETE",
    });

    getUrls();

    if (shortUrl.includes(shortCode)) {
      setShortUrl("");
    }
  };

  return (
    <div className="app">
      <nav>
        <div className="logo">🔗 Shortify</div>
        <div className="nav-text">Fast • Simple • Secure</div>
      </nav>

      <main>
        <div className="hero">
          <div className="badge">URL SHORTENER</div>

          <h1>
            Shorten your links.
            <br />
            <span>Share them anywhere.</span>
          </h1>

          <p>
            Transform long URLs into short, clean and easy-to-share links.
          </p>
        </div>

        <div className="card">
          <label>Paste your long URL</label>

          <div className="input-box">
            <span>🔗</span>

            <input
              type="text"
              placeholder="https://example.com/your-long-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <button onClick={shortenUrl}>
              Shorten
            </button>
          </div>

          {shortUrl && (
            <div className="result">
              <div>
                <small>Your shortened URL</small>

                <a href={shortUrl} target="_blank">
                  {shortUrl}
                </a>
              </div>

              <button onClick={copyUrl}>
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          )}
        </div>

        {urls.length > 0 && (
          <div className="history">
            <h2>Your Links</h2>

            {urls.map((item) => (
              <div className="url-item" key={item.short_code}>
                <div className="url-info">
                  <p className="original-url">
                    {item.original_url}
                  </p>

                  <a
                    href={item.short_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.short_url}
                  </a>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => deleteUrl(item.short_code)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="features">
          <div>
            <strong>⚡ Fast</strong>
            <p>Create short links instantly.</p>
          </div>

          <div>
            <strong>🔒 Reliable</strong>
            <p>Your links are stored safely.</p>
          </div>

          <div>
            <strong>📱 Simple</strong>
            <p>Easy to share anywhere.</p>
          </div>
        </div>
      </main>

      <footer>
        Built with React + FastAPI
      </footer>
    </div>
  );
}

export default App;