import React from 'react'
import TextContainer from '../styles/TextContainer'

const Text = ({type}) => {
    return (
        <TextContainer>
            <h1>{type}</h1>
        </TextContainer>  
        
    )
}

export default Text
