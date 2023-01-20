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
    // ${props => props?.isActive && `background-color: ${colors.successLight};`} 
    &:hover {
        cursor: pointer;
        transform: scale(1.015);
        // box-shadow: 8px 8px 20px 5px ${colors.primaryLight};
    }
`
