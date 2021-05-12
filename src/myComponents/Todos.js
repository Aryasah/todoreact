import React from 'react'
import Todo from './Todo.js';
import './Todos.css';
export default function Todos(props) {
   
    return (
        <div>
        <div id="titles">
        <h3 id="head" className="my-0">ToDo's List</h3>
        </div>
        <div className="containers">
          
        
        {props.todos.length==0?<h5 >no to dos to display</h5>:
        props.todos.map((todo) =>{
             return(<Todo todo={todo} key={todo.s_n0} onDelete={props.onDelete}/>)
            
        })
        }
        
           
        </div>
        </div>
    )
}
