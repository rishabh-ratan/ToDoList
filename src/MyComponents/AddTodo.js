import React, { useState } from 'react';

export default function AddTodo({addtodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    function submit(e){
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Descriptions fiels cannot be empty");
        }
        else{
            addtodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="mx-4 my-2">
            <h4>ADD TODOs</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label forhtml="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter Title" />
                </div>
                <div className="mb-3">
                    <label forhtml="desc" className="form-label">Description</label>
                    <textarea className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" rows="3"></textarea>
                </div>
                <button type="submit" className="btn-success btn-sm">Add Todo</button>
            </form>
        </div >
    )
}
