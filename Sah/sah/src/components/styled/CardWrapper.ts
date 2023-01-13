import { Box, Theme } from "@mui/material";
import styled from "styled-components";
import colors from "../../utils/color";


export const CardWrapper = styled(Box)<{isActive?:boolean , theme?:Theme}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
    background-color: ${props => props?.theme.palette?.secondary?.main};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    transition:all 0.3s ease-in-out;
    box-shadow: 2px 2px 20px #e2e3e9;
    // ${props => props?.isActive && `background-color: ${colors.successLight};`} 
    &:hover {
        cursor: pointer;
        box-shadow: 8px 8px 20px 5px #e2e3e9;
    }
`
