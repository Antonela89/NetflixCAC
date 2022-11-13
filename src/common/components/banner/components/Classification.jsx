import React from 'react'
import ClassificationContainer from '../styles/ClassificationContainer'

const Classification = ({edad}) => {
    return (
        <ClassificationContainer>
            <h3>{edad} +</h3>
        </ClassificationContainer>
    )
}

export default Classification