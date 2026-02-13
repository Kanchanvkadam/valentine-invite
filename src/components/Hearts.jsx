import "./heart.css";

const HEARTS_COUNT = 25;

export default function Hearts() {
  return (
    <div className="hearts-container">
      {Array.from({ length: HEARTS_COUNT }).map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "vw",
            animationDuration: 4 + Math.random() * 4 + "s",
            animationDelay: Math.random() * 3 + "s",
            fontSize: 16 + Math.random() * 20 + "px"
          }}
        >
          {["💖", "💕", "💗", "❤️"][Math.floor(Math.random() * 4)]}
        </span>
      ))}
    </div>
  );
}
