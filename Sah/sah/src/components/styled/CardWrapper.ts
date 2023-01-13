import { Box } from "@mui/material";
import styled from "styled-components";
import colors from "../../utils/color";


export const CardWrapper = styled(Box)<{isActive?:boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    transition:all 0.3s ease-in-out;
    box-shadow: 2px 2px 20px #e2e3e9;
    ${props => props?.isActive && `background-color: ${colors.secondary};`} 
    &:hover {
        cursor: pointer;
        box-shadow: 8px 8px 20px 10px #e2e3e9;
    }
`
