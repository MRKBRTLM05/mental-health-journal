import React, { useState } from "react";

function JournalForm({ addEntry }) {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("neutral");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addEntry({
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      mood,
      text,
    });

    setText("");
    setMood("neutral");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="How are you feeling today?"
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="happy">😊 Happy</option>
        <option value="neutral">😐 Neutral</option>
        <option value="sad">😢 Sad</option>
      </select>
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default JournalForm;
