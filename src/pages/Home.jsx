import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [sender, setSender] = useState("");
  const [copied, setCopied] = useState(false);

  const baseUrl = window.location.origin;
  const link = `${baseUrl}/#/view?name=${encodeURIComponent(
    name || "You"
  )}&sender=${encodeURIComponent(sender || "Someone")}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="create-container">
      <h1 className="title">Create Valentine Link 💖</h1>

      <p className="preview">
        {name || "Someone"}, will you be my Valentine? 💘
      </p>

      <div className="inputs">
        <input
          placeholder="Your name"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <input
          placeholder="Their name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="link-box">{link}</div>

      <button className="copy-btn" onClick={copyLink}>
        {copied ? "Copied! 💕" : "Copy Link 🔗"}
      </button>
    </div>
  );
}
