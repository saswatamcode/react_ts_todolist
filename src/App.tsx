import React from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  );
};

export default App;
