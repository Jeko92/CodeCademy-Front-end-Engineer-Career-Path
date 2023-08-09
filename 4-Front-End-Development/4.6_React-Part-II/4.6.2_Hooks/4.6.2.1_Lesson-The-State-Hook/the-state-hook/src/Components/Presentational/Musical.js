import React, { useState } from "react";

export function Musical() {
  const [state] = useState({
    title: "Best Musical Ever",
    actors: ["George Wilson", "Tim Hughes", "Larry Clements"],
    locations: {
      Chicago: {
        dates: ["1/1", "2/2"],
        address: "chicago theater",
      },
      SanFrancisco: {
        dates: ["5/2"],
        address: "sf theater",
      },
    },
  });
  return (
    <div>
      <ul>
        <h2>With One Hook for Separate States</h2>
        <li>
          Title: <span>{state.title}</span>
        </li>
        <li>
          Actors: <span>{state.actors.join(", ")}</span>
        </li>
        {Object.keys(state.locations).map((city) => (
          <li key={city}>
            Location: <span>{city}</span>. Dates:{" "}
            <span>{state.locations[city].dates.join(", ")}.</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MusicalRefactored() {
  const [title] = useState("Best Musical Ever");
  const [actors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
  const [locations] = useState({
    Chicago: {
      dates: ["1/1", "2/2"],
      address: "chicago theater",
    },
    SanFrancisco: {
      dates: ["5/2"],
      address: "sf theater",
    },
  });

  return (
    <div>
      <h2>With Separate Hooks for Separate States</h2>
      <ul>
        <li>
          Title: <span>{title}</span>
        </li>
        <li>
          Actors: <span>{actors.join(", ")}</span>
        </li>
        {Object.keys(locations).map((city) => (
          <li key={city}>
            Location: <span>{city}</span>. Dates:{" "}
            <span>{locations[city].dates.join(", ")}.</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
