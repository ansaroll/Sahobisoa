import { CircularProgress, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  SurveyContainer,
  QuestionContent,
  LinkWrapper,
} from "../../components/styled/Atom";

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
  }, [data]);

  if (isLoading) {
    return (
      <SurveyContainer>
          <CircularProgress sx={{mt:15}} />;
      </SurveyContainer>
    );
  }

  return (
    <SurveyContainer>
      {!isLoading && (
        <Typography className="text" variant="h3" mt={15} mb={5}>
          Question {questionNumber}
        </Typography>
      )}

      <QuestionContent className="text">
        {surveyData[questionNumberInt]}{" "}
      </QuestionContent>
      <LinkWrapper>
        <Link to={`/survey/${prevQuestionNumber}`}>
          <span className="text"> ← Précédent</span>
        </Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>
            <span className="text">Suivant →</span>
          </Link>
        ) : (
          <Link to="/results">
            <span className="text">Résultats 💡</span>
          </Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
};

export default Survey;
