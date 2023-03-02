import { Box } from "@mui/material";
import { ReactNode } from "react";
import styled from "styled-components";
import colors from "../../utils/color";

export const SurveyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

export const QuestionContent = styled.span`
  margin: 40px;
  padding: 40px;
  border: 1px solid ${colors.primary};
  border-radius: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;

export const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`;

const ResultsContainer = styled.div<{ theme: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;

export const ResultsTitle = styled.div<{ theme: string }>`
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 28px;
  max-width: 60%;
  & > span {
    padding-left: 10px;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 60px;
`;

export const JobTitle = styled.span<{ theme: string }>`
  color: ${({ theme }) =>
    theme === "light" ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`;

export const JobDescription = styled.div<{ theme: string }>`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === "light" ? colors.secondary : "#ffffff")};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  text-align: center;
  height: 25px;
  display: flex;
  align-items: center;
`;

export const BoxSpaceBetween = ({ children }: { children: ReactNode }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      {children}
    </Box>
  );
};
