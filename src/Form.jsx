import React from 'react'

export default function Form(props) {
    function handleSubmit(e) {
        e.preventDefault()
        const newTodos = props.todos.slice()
        newTodos.push({
            id: props.todos.length,
            content: e.target.desc.value
        })
        
        props.setTodos(newTodos)
    }

    return (
            <form onSubmit={handleSubmit}>
                <input type="text" name="desc"></input>
                <button type="submit">追加</button>
            </form>
    )
}