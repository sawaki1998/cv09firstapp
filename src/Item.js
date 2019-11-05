import React from 'react'
import styled from 'styled-components'

const ButtonTextWrap = styled.p`
    color: ${props => (props.isDone? 'gray':'red')};
`

export default function Item(props) {
    // React.useStateは「値」と「値を更新するための関数」を返す
    const [isDone, setIsDone] = React.useState(false)
    // const [progress, setProgress] = React.useState(0)

    const toggleIsDone = () => setIsDone(!isDone)

    const buttonText = isDone ? '戻す' : '完了'  
    return (
        <li>
            <p>{props.content}</p>
            <button onClick={toggleIsDone}>
                <ButtonTextWrap isDone={isDone}>
                    {buttonText}
                </ButtonTextWrap>
            </button>
            
        </li>
    )
}

