import React from 'react'
import Todo from './Todo.js';
import './Todos.css';
export default function Todos(props) {
    return (
        
        <div className="containers">
          
        <h3 className=" my-5 mb-5">ToDo's List</h3>
        {props.todos.length==0?"no to dos to display":
        props.todos.map((todo) =>{
             return(<Todo todo={todo} key={todo.s_n0} onDelete={props.onDelete}/>)
            
        })
        }
        
           
        </div>
    )
}
