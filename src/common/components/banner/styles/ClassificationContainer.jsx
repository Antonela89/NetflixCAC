import styled from 'styled-components';

const ClassificationContainer = styled.div`
    position: absolute;
    width: 8%;
    bottom: 40px;
    right: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 15px;
    border-left: solid 4px white;
    background-color: #45454590;
`

ClassificationContainer.defaultProps = {
    color: "black"
    
}

export default ClassificationContainer