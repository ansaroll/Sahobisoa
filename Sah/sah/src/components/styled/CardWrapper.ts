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
    ${props => props?.isActive && `background-color: ${colors.successDark};`} 
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`
