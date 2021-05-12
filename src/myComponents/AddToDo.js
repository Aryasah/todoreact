import React from 'react'
import { useState } from 'react';


export default function AddToDo(props) {
    const [title,setTitle]= useState("");
    const [desc,setDesc]= useState("");
    
    const submit=(e)=>{
        e.preventDefault();//prevent relaoding on submitio of htmlForm
        if(!title || !desc){
            alert("Please fill all the fileds ");
        }
        else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <>




<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Add Todos</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form className="text-left mx-4"  onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Title &nbsp; &nbsp;</label>
                    <input type="text" onChange = {(e)=>{setTitle(e.target.value)}} className="htmlForm-control" id="title" value={title} />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Description:&nbsp;&nbsp; </label>
                    <input type="text" className="htmlForm-control" id="desc" onChange = {(e)=>{setDesc(e.target.value)}}  value={desc} />
                </div>
              
                <button type="submit" className="btn btn-success btn-sm">Add your Todos</button>
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
</>
    )
}


