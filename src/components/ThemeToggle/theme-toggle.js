import styled from "styled-components";

const ThemeToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2.3rem;
    transition: all .7s;
`

const Switch = styled.label`
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 84px;
    height: 44px;
    cursor: pointer;

    & input{
        opacity: 0;
        width: 0;
        height: 0;
    }

    .theme-input:checked + .slider {
        background-color: var(--primary-color);
    }

    .theme-input:focus + .slider {
        box-shadow: 0 0 1px var(--primary-color);
    }

    .theme-input:checked + .slider:before {
        transform: translateX(38px);
    }
`

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--tertiary-color);
    transition: .4s;
    border-radius: 30px;

    &::before {
        position: absolute;
        content: "";
        height: 35px;
        width: 35px;
        border-radius: 20px;
        left: 5px;
        bottom: 4.5px;
        z-index: 2;
        background-color: var(--secondary-color);
        transition: .4s;
    }
`

const Sun = styled.div`
    & svg{
        position: absolute;
        top: 5px;
        left: 46px;
        z-index: 1;
        width: 34px;
        height: 34px;
        animation: rotate 15s linear infinite;

        @keyframes rotate {
            0% {
                transform: rotate(0);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }
`

const Moon = styled.div`
    & svg{
        fill: var(--background);
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 1;
        width: 34px;
        height: 34px;
        animation: tilt 5s linear infinite;

        @keyframes tilt {
            0% {
                transform: rotate(0deg);
            }

            25% {
                transform: rotate(-10deg);
            }

            75% {
                transform: rotate(10deg);
            }

            100% {
                transform: rotate(0deg);
            }
        }
    }
`

function ThemeToggle(){
    return(
        <ThemeToggleContainer>
            <Switch>
                <Sun><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></Sun>
                <Moon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></Moon>   
                <input type="checkbox" className="theme-input"/>
                <Slider className="slider"></Slider>
            </Switch>
        </ThemeToggleContainer>
    )
}

export default ThemeToggle