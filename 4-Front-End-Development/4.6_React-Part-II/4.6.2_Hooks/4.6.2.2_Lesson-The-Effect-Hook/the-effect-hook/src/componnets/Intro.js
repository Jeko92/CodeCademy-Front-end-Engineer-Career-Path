import React, { useState, useEffect } from "react";

export default function PageTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Hi, ${name}`;
  });

  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input
        value={name}
        type="text"
        onChange={({ target }) => setName(target.value)}
      />
    </div>
  );
}
