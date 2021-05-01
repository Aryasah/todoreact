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
        <div className="container my-3">
        <h3 className="display-5 text-center">Add To To</h3>
            <form className="text-left mx-4"  onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Title</label>
                    <input type="text" onChange = {(e)=>{setTitle(e.target.value)}} className="htmlForm-control" id="title" value={title} />
                    <div id="emailHelp" className="htmlForm-text">Add your todo's list</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label">Description</label>
                    <input type="text" className="htmlForm-control" id="desc" onChange = {(e)=>{setDesc(e.target.value)}}  value={desc} />
                </div>
              
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>

        </div>
    )
}


