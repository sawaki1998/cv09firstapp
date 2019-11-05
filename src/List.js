import React from 'react'
import Item from './Item'


export default function List(props) {
    const Items = props.todos.map((todo) => (
        <Item 
            id={todo.id}
            content={todo.content}
        />
    ))

    return (
        <ul>
            {Items}
        </ul>
    )
    
}