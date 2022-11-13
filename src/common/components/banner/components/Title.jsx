import React from 'react'
import TitleContainer from '../styles/TitleContainer'

const Title = ({titulo}) => {
    return (
        <TitleContainer>
            <h1>{titulo}</h1>
        </TitleContainer>
    )
}

export default Title