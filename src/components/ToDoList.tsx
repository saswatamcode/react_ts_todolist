import React, { useState } from "react";
import styled, { StyledComponent } from "styled-components/macro";

const ToDoContainer: StyledComponent<"div", never> = styled.div`
  border-radius: 30px;
  width: 100%;
  background-color: white;
  margin-top: -50px;
  @media only screen and (max-width: 850px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const ToDoInput: StyledComponent<"input", never> = styled.input`
  border-radius: 30px;
  height: 80px;
  width: 32%;
  margin: 30px;
  padding: 10px;
  border: 2px solid blue;
  font-size: 30px;
  font-weight: 400;
  :focus {
    outline: none;
  }
  @media only screen and (max-width: 850px) {
    width: 80%;
    height: 70px;
  }
`;

const AddButton: StyledComponent<"button", never> = styled.button`
  background: #425195;
  color: white;
  font-size: 18px;
  border-radius: 10px;
  padding: 10px;
  transition: 0.2s;
  :focus {
    outline: none;
  }
  :hover {
    background: #686da0;
  }
`;

const ToDo: StyledComponent<"div", never> = styled.div`
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  margin: 1rem;
  padding: 2rem;
  position: relative;
  width: 70%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Array<String>>([]);
  const [todoInput, setTodoinput] = useState<String>("");

  const addTask = () => {
    setTodos((oldTodos) => [...oldTodos, todoInput]);
    setTodoinput("");
  };

  return (
    <ToDoContainer>
      <ToDoInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodoinput(e.target.value)
        }
      ></ToDoInput>

      <AddButton onClick={addTask}>+ Add a task </AddButton>

      {todos.map((todo: String): JSX.Element | undefined => {
        if (todo !== "") {
          return <ToDo>{todo}</ToDo>;
        }
      })}
    </ToDoContainer>
  );
};

export default ToDoList;
