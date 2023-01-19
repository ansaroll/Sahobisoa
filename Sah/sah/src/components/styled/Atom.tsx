import styled from "styled-components";
import colors from "../../utils/color";

export const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`