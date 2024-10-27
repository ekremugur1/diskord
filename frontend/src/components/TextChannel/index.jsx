/* eslint-disable react/prop-types */

import { useRef } from "react";
import connection from "../../connection";
import { useState } from "react";
import { useEffect } from "react";

export const TextChannel = ({ details }) => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const listener = connection.addEventListener("message", (message) => {
      setMessages((prev) => [...prev, message.data]);
    });

    return () => {
      connection.removeEventListener(listener);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current == null) {
      return;
    }

    // connection.send({ channelId: details.id, text: inputRef.current.value });

    connection.send(inputRef.current.value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="flex flex-col flex-grow">
      <div className="flex-grow">
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <form className="flex bg-def" onSubmit={onSubmit}>
        <input
          className="m-4 p-3 px-4 rounded-xl bg-lighter flex-grow"
          ref={inputRef}
          type="text"
          placeholder={`Message #${details.name}`}
        />
      </form>
    </div>
  );
};
