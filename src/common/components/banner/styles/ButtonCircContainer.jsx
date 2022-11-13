import styled from 'styled-components';

const ButtonCircContainer = styled.button`
    display: flex;
    bottom: 45px;
    left: 88%;
    border-radius: 50%;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    border: none;
    background:${(props) => props.background};
`

ButtonCircContainer.defaultProps = {
}

export default ButtonCircContainer
