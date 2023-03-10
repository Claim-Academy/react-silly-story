import Form from "./components/Form";
import Heading from "./components/Heading";
import { useState } from "react";
import apiService from "./services/api.service";

const person = await apiService.show();

// TODO: Actually get this into React state
console.log(person);

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
