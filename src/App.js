import React from 'react'
import Form from './Form'
import List from './List'
// import './App.css'
import styled from 'styled-components'

const AppWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: gray;
`

export default function App() {
    const [todos, setTodos] = React.useState([
        {
            id: 0,
            content: "課題を終わらせる"
        },
        {
            id: 1,
            content: "蟹食べに行く"
        },
    ])
    return (
        <AppWrapper>
            <Form todos={todos} setTodos={setTodos}></Form>
            <List todos={todos}></List>
        </AppWrapper>
    )
}