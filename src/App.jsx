import React, { useState, useEffect } from "react";
import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

function App() {
  const [entries, setEntries] = useState(() => {
    const stored = localStorage.getItem("journalEntries");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([entry, ...entries]);
  };

  return (
    <div className="app">
      <h1>Mental Health Journal</h1>
      <JournalForm addEntry={addEntry} />
      <JournalList entries={entries} />
    </div>
  );
}

export default App;
