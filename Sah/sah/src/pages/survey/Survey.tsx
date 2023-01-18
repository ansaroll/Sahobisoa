import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/color";
import { QueryClient, useQuery } from "@tanstack/react-query";

export const Survey = () => {
  const { id: questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber || "0");
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyData, setSurveyData] = useState<any>({});

  const { isLoading, data } = useQuery(["survey"], () => {
    return fetch(`http://localhost:8000/survey`).then((res) => res.json());
  });

  useEffect(() => {
    if (data) {
      setSurveyData(data.surveyData);
    }
    console.log({ surveyData });
  }, [data]);

  if (isLoading) {
    return (
      <SurveyContainer>
        <CircularProgress />;
      </SurveyContainer>
    );
  }

  return (
    <SurveyContainer>
      {!isLoading && <QuestionTitle>Question {questionNumber}</QuestionTitle>}

      <QuestionContent>{surveyData[questionNumberInt]} </QuestionContent>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
};

export default Survey;

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.span`
  margin: 40px;
  padding: 40px;
  border: 1px solid ${colors.primary};
  border-radius: 10px;
`;

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`;
