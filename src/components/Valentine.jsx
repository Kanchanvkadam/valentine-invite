import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import Hearts from "./Hearts";

const MAX_NO_CLICKS = 6;

export default function Valentine({
  name = "You",
  sender = "Someone"
}) {
  const [yes, setYes] = useState(false);
  const [hoverYes, setHoverYes] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ top: "60%", left: "55%" });
  const [showLove, setShowLove] = useState(false);

  const moveNo = () => {
    setNoCount(c => c + 1);
    setNoPos({
      top: Math.random() * 60 + 20 + "%",
      left: Math.random() * 60 + 20 + "%"
    });
  };

  const handleYes = () => {
    setHoverYes(false);

    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    setYes(true);
  };

  /* 💖 Reveal "I love you" after delay */
  useEffect(() => {
    if (yes) {
      const timer = setTimeout(() => {
        setShowLove(true);
      }, 2500); // 2.5 seconds

      return () => clearTimeout(timer);
    }
  }, [yes]);

  /* =====================
     💖 FINAL SCREEN
     ===================== */
  if (yes) {
    return (
      <div className="valentine-container final-screen">
        <Hearts />

        <img
          src="https://media.tenor.com/0blYgkJWc_IAAAAM/milk-and-mocha-bear-cute-couple.gif"
          alt="Happy Valentine"
          className="final-gif"
        />

        <h1>Thank you for choosing YES 💖</h1>
        <p>{name}, my heart chose you long before this moment 💕</p>

        {/* FINAL LOVE REVEAL */}
        {showLove && (
          <div className="love-reveal">
            I love you ❤️
          </div>
        )}
      </div>
    );
  }

  /* =====================
     💌 DEFAULT SCREEN
     ===================== */
  return (
    <div className="valentine-container">
      <img
        src="https://valentine-invitation-for-you.netlify.app/assets/716121394a4614c7b2b0f891ff66881a.gif"
        alt="Valentine"
        className="valentine-gif"
      />

      <h1>{name}, will you be my Valentine? 💖</h1>

      <div className="buttons">
        <div
          className="yes-wrapper"
          onMouseEnter={() => setHoverYes(true)}
          onMouseLeave={() => setHoverYes(false)}
        >
          <button className="yes" onClick={handleYes}>
            YES 💘
          </button>

          {hoverYes && (
            <div className="hover-preview">
              <img
                src="https://valentine-invitation-for-you.netlify.app/assets/pls.gif"
                alt="Please"
                className="hover-gif"
              />
              <p>Click it please...</p>
            </div>
          )}
        </div>

        {noCount < MAX_NO_CLICKS && (
          <button
            className="no"
            style={{
              top: noPos.top,
              left: noPos.left,
              opacity: 1 - noCount * 0.15,
              transform: `scale(${1 - noCount * 0.1})`
            }}
            onMouseEnter={moveNo}
            onClick={moveNo}
          >
            NO 💔
          </button>
        )}
      </div>
    </div>
  );
}
