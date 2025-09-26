import styled from "styled-components";
import { Background } from "../TopBackground/styles";

export const Button = styled.button`
    border: ${props => props.theme === "primary"
        ? "none"
        : "1px solid #fff"};
    border-radius: 30px;
    background: ${props => props.theme === "primary"
        ? "linear-gradient(180deg, #ff548f  0%, #be80ff 100%)"
        : "transparent"};
    box-shadow: 1px 2px 3px #ffc1d78f;
    color: #fff;
    font-size: 16px;
    padding: 16px 32px;
    margin: 10px 0;
    width: fit-content;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        ${props => props.theme === "primary"
            ? `
                opacity: 0.8;
                transition: all 0.3s ease-in-out;
            `
            : `
                background: blur(10px);
                background: rgba(230, 130, 230, 0.25);
                box-shadow: 0 4px 25px rgba(230, 130, 230, 0.25);
                transition: all 0.3s ease-in-out;
                color: #be80ff;
            `
        }
    }
 
    &:active{
        opacity: 0.5;
        transform: scale(0.95);
        transition: all 0.1s ease-in-out;
    }

`