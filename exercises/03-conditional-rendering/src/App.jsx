import React from "react";
import { todos } from "../src/data/todos";
import Todo from "./components/todos/todos";


function App() {
  return (
    <div className="App">
      <Todo todo={todos} showCompleted={true}/>
      <Todo todo={todos} showCompleted={false}/>

    </div>
  );
}

export default App;
