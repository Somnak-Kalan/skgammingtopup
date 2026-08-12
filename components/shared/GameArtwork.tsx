"use client";

import { useEffect, useState } from "react";
import type { GameDefinition } from "@/types";

interface GameArtworkProps {
  game: GameDefinition;
  className?: string;
  showStatus?: boolean;
}

export default function GameArtwork({
  game,
  className = "",
  showStatus = false,
}: GameArtworkProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [game.artwork]);

  return (
    <div
      className={`game-artwork ${className}`}
      style={{
        background: game.gradient,
      }}
    >
      <div className="game-artwork-decoration game-artwork-decoration-one" />
      <div className="game-artwork-decoration game-artwork-decoration-two" />

      {!imageFailed && game.artwork ? (
        <img
          src={game.artwork}
          alt={`${game.title} artwork`}
          className="game-artwork-image"
          onError={() => setImageFailed(true)}
        />
      ) : null}

      <div className="game-artwork-fallback">
        <span>{game.shortTitle}</span>
      </div>

      {showStatus ? (
        <span
          className={`status-badge ${
            game.status === "live"
              ? "status-badge-live"
              : "status-badge-upcoming"
          }`}
        >
          {game.status === "live" ? "Available" : "Upcoming"}
        </span>
      ) : null}
    </div>
  );
}