import React from 'react'
import Todo from './Todo.js';

export default function Todos(props) {
    return (
        
        <div className="container">
        <h3 className="display-3 my-5 mb-5">ToDo's List</h3>
        {props.todos.length==0?"no to dos to display":
        props.todos.map((todo) =>{
             return(<Todo todo={todo} key={todo.s_n0} onDelete={props.onDelete}/>)
            
        })
        }
        
           
        </div>
    )
}
