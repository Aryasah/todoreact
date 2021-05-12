
import './App.css';
import AddToDo from './myComponents/AddToDo.js';
import Header from './myComponents/Header.js';
import Todos from './myComponents/Todos.js';
import Footer from './myComponents/Footer.js';
import React, { useState, useEffect } from 'react';
import About from './myComponents/About.js';

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
  const addTodo = (title, desc) => {
    let s_no;
    if (todos.length === 0) {
      s_no = 0;
    }
    else {
      s_no = todos[todos.length - 1].s_n0 + 1;
    }
    const myTodo = {
      s_n0: s_no,
      task: title,
      description: desc
    }
    setTodos([...todos, myTodo]);




  }
  const onDelete = (todo) => {
    console.log("tata", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));


  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="App">
        <Header title="Todos list" searchBar={false} />
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddToDo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
         
          </Route>
          <Route exact path="/about">
          {/* //exact isliye kyuki react letter by letter check karta h aur agar aisa hua toh isme jo slash h use slash homewala maan liya jaayega */}
            <About />
          </Route>
        </Switch>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;
