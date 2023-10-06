import { useEffect, useState } from "react";
import "./messages.css";
const tutelEndpoint = "https://data.mongodb-api.com/app/data-khocl/endpoint";
const apiKey =
  "MK4KtrSxvYJrF4JjghfnKjzciEgetkg5KbHhBqXSPMy4lZwRkcqjC3cCLypYwD7a";

const handlePrompt = (callback) => {
  const input = prompt("tutle");
  if (input) {
    fetch(`${tutelEndpoint}/tutel`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    }).then(() => callback());
  }
};

export function Messages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const response = await fetch(`${tutelEndpoint}/get`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const data = await response.json();
    setMessages(data.result);
  };
  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="messages">
      <button onClick={() => handlePrompt(fetchMessages)}>tutle</button>
      {messages.length > 0 &&
        messages.map((message) => <p key={message._id}>🐢{message.tutel}🐢</p>)}
    </div>
  );
}
