import React from 'react'

export default function Todo({todo, onDelete}) {
    return (
        <div  className=" px-10 py-20 my-3">
        
        <h3 className="display-5">{todo.task}
        </h3>
          <p className="display-6">
          {todo.description}

          </p>
          <button className="btn btn-sm btn-danger"  onClick={()=>{onDelete(todo)}}>Delete</button>
          
        </div>
    )
}
