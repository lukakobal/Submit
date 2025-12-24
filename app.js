import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (name === "" || email === "") {
      setMessage("Please fill in all fields.");
      return;
    }

    setMessage(`Submitted: ${name} (${email})`);
  }

  return (
    <div className="container">
      <h1>Contact Form</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}
