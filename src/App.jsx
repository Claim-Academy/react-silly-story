import Form from "./components/Form";
import Heading from "./components/Heading";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("hello world");

  return (
    <>
      <Heading message={message} />
      <Form setMessage={setMessage} />
    </>
  );
}

export default App;
