import {
  Box,
  Button,
  CircularProgress,
  Container,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  SurveyContainer,
  QuestionContent,
  LinkWrapper,
  BoxSpaceBetween,
} from "../../components/styled/Atom";
import { SurveyContext } from "../../utils/context";

export const Survey = () => {
  const { saveAnswers, answers } = useContext(SurveyContext);
  console.log({ answers });

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

  console.log('sas' , Object.keys(Object.entries(surveyData)))

  const handleAnswerSurvey = (surveyNumber: number, answer: boolean) => {
    saveAnswers({ [surveyNumber]: answer });
  };

  if (isLoading) {
    return (
      <SurveyContainer>
        <CircularProgress sx={{ mt: 15 }} />
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

      <Slide direction={questionNumberInt > prevQuestionNumber ? 'left' : 'right'} in={true} mountOnEnter >
        <QuestionContent className="text">
          {surveyData[questionNumberInt]}{" "}
        </QuestionContent>
      </Slide>

      <Container maxWidth="md">
        <BoxSpaceBetween>
          <Button
            variant={answers?.[questionNumberInt] ? "outlined" : "contained"}
            onClick={() => handleAnswerSurvey(questionNumberInt, false)}
          >
            Non
          </Button>
          <Button
            variant={answers?.[questionNumberInt] ? "contained" : "outlined"}
            onClick={() => handleAnswerSurvey(questionNumberInt, true)}
          >
            Oui
          </Button>
        </BoxSpaceBetween>
      </Container>

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
