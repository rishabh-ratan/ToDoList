import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  function onDelete(todo) {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter(delTodo));
    function delTodo(e) {
      return e != todo;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function addtodo(title, desc) {
    console.log("adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    let mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
                <AddTodo addtodo={addtodo} />
                <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
