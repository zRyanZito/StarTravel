import styled from "styled-components";
import Logo from "../Logo/logo";
import HeaderButtons from "./HeaderButtons/header-buttons";
import Profile from "./HeaderButtons/profile";

const HeaderContainer = styled.header`
    display: flex;  
    flex-direction: row;
    height: 10vh;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    z-index: 100;

    @media screen and (min-width: 636px){
        gap: 1rem;
    }

    @media screen and (min-width: 1640px){
        width: 75%;
    }
`

function Header({profileColor, logoColor}){
    return(
        <HeaderContainer>

            <Logo color={logoColor}/>
            
            <HeaderButtons/>

            <Profile color={profileColor}/>

        </HeaderContainer>
    )
}

export default Header