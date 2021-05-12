import React from 'react';
import './Todo.css';

export default function Todo({todo, onDelete}) {
  {var i=1;
  i++;}
    return (
      <section>
      <div className="boxes">
      <span> <div  className="content">
        
        <h3 className="display-5">{todo.task}
        </h3>
          <p className="display-6">
          {todo.description}

          </p>
          <button className="btn btn-sm btn-danger"  onClick={()=>{onDelete(todo)}}>Delete</button>
          
        </div></span>
      </div>
      </section>
  
  

    )
}
