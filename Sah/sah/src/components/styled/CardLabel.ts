import { Theme } from "@mui/material";
import styled from "styled-components";

export const CardLabel = styled.span<{theme:Theme}>`
    color:  ${props => props?.theme.palette?.secondary?.light};;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
`;