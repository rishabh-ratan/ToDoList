import React from 'react'
import TodoItem from "./TodoItem"

export default function Todos(props) {
    let todosStyle = {
        minHeight: "70vh",
        margin : "40px auto"
    }
    return (
        <div className="container my-4" style={todosStyle}>
            <h3>TODOs LIST</h3>
            {props.todos.length ? props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>}
            ) : "No TODOs to display"}
        </div>
    )
}
