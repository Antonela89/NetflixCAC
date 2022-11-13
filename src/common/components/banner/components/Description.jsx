import React from 'react'
import DescriptionContainer from '../styles/DescriptionContainer'

const Description = ({texto}) => {
    return (
        <DescriptionContainer>
            <p>{texto}</p>
        </DescriptionContainer>
    )
}

export default Description
