import React from 'react'

export default function Footer() {
    let footerStyleObject = {
        position : "relative",
        top : "10vh",
        width : "100%"
    }
    return (
        <div className="bg-dark text-light" style={footerStyleObject}>
            <p className="text-center">Copyright &copy; rishabhTodo.com</p>
        </div>
    )
}
