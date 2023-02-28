import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grow,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { useState, useEffect, useContext, useRef } from "react";
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

  const { id: questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber || "0");
  const prevQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyData, setSurveyData] = useState<any>({});

  const { isLoading, data } = useQuery(["survey"], async () => {
    const res = await fetch(`http://localhost:8000/survey`);
    return await res.json();
  });

  useEffect(() => {
    if (data) {
      setSurveyData(data.surveyData);
    }
  }, [data]);

  console.log("sas", Object.keys(Object.entries(surveyData)));

  const handleAnswerSurvey = (surveyNumber: number, answer: boolean) => {
    saveAnswers({ [surveyNumber]: answer });
  };

  const containerRef = useRef(null);

  if (isLoading) {
    return (
      <SurveyContainer>
        <CircularProgress sx={{ mt: 15 }} />
      </SurveyContainer>
    );
  }

  return (
    <>
      {!isLoading && (
        <Typography className="text" variant="h3" mt={15} mb={5}>
          Question {questionNumber}
        </Typography>
      )}

      <SurveyContainer  ref={containerRef} style={{
                overflow: "hidden",
              }}>
        {Object.keys(Object.entries(surveyData))?.map((index: string) => {
          return (
            <Slide
              style={{
                overflow: "hidden",
              }}
              timeout={{
                enter: 3000,
                exit: 1500,
              }}
              direction="left"
              in={parseInt(index) + 1 == questionNumberInt}
              unmountOnExit
              container={containerRef.current}
            >
              <QuestionContent className="text" style={{
                transition:'ease-in-out'
              }}>
                <Typography noWrap>
                {surveyData[parseInt(index) + 1]}{" "}
                </Typography>
              </QuestionContent>
            </Slide>
          );
        })}
      </SurveyContainer>

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
    </>
  );
};

export default Survey;

type TSurvey = {};
