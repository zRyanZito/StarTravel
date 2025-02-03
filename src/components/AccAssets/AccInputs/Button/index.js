import styled from "styled-components"

const AccButton = styled.button`
    width: 82%;
    height: 3.5rem;
    border-radius: 0.5rem;
    opacity: 0.8;
    border: none;
    background: var(--background);
    color: var(--secondary-color);
    font-family: "Nunito Sans";
    font-size: 1.25rem;
    font-weight: 700;
    transition: all .7s;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`

function Button({type, content, action}){
    return(
        <AccButton type={type} onClick={action}>{content}</AccButton>
    )
}

export default Button