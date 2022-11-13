import styled from 'styled-components';

const LogoContainer = styled.div`
width: 15%;
height: 100%;
left: 0;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
`

LogoContainer.defaultProps = {
    color: "red"
}

export default LogoContainer