import React from 'react'
import Todo from './Todo.js';
import './Todos.css';
export default function Todos(props) {
    let style={
    color:"#000",
    }
    return (
        
        <div className="containers">
          
        <h3 className=" my-5 mb-5">ToDo's List</h3>
        {props.todos.length==0?<h5 style={style}>no to dos to display</h5>:
        props.todos.map((todo) =>{
             return(<Todo todo={todo} key={todo.s_n0} onDelete={props.onDelete}/>)
            
        })
        }
        
           
        </div>
    )
}
