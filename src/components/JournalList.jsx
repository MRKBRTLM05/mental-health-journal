import React from "react";

function JournalList({ entries }) {
  if (entries.length === 0) return <p>No entries yet.</p>;

  return (
    <div className="list">
      {entries.map((entry) => (
        <div key={entry.id} className="entry">
          <h4>
            {entry.date} - {entry.mood}
          </h4>
          <p>{entry.text}</p>
        </div>
      ))}
    </div>
  );
}

export default JournalList;
