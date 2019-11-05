import React from 'react'

export default function Form(props) {
    const [fuck, setFuck] = React.useState(0)
    function handleSubmit(e) {
        e.preventDefault()
        const newTodos = props.todos.slice()
        newTodos.push({
            id: props.todos.length,
            content: e.target.desc.value
        })
        setFuck(fuck + 2)
        props.setTodos(newTodos)
        console.log(newTodos)
        console.log(fuck)
    }
    function handleClick() {
        setFuck(fuck + 2)
        console.log(fuck)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="desc"></input>
                <button type="submit">追加</button>
            </form>
            <button onClick={handleClick}>うおおおおお</button>
        </div>
    )
}