import { fireEvent } from '@testing-library/dom'
import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <div className="container my-4">
            <h4>{todo.title}</h4>
            <pre>{todo.desc}</pre>
            <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todo)} >Delete</button><hr/>
        </div>
    )
}
