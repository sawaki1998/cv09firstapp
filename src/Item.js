import React from 'react'
import styled from 'styled-components'

const ButtonTextWrap = styled.p`
    color: ${props => (props.isDone? 'gray':'red')};
`

export default function Item(props) {
    const [isDone, setIsDone] = React.useState(false)
    const buttonText = isDone ? '戻す' : '完了'  
    function toggleIsDone() {
        setIsDone(!isDone)
        console.log(isDone)
    }

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

