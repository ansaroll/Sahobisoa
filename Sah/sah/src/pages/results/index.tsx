import { useContext } from "react";
import { JobTitle, ResultsTitle } from "../../components/styled/Atom";
import { SurveyContext, ThemeContext } from "../../utils/context";
import { useQuery } from "@tanstack/react-query";

export function formatJobList({ title, listLength, index }: any) {
  if (index === listLength - 1) {
    return title;
  } else {
    return `${title},`;
  }
}

export function formatQueryParams(answers: any) {
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0;
    const separator = isFirstParam ? "" : "&";
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
  }, "");
}

const Results = () => {
  const { theme } = useContext(ThemeContext);
  const { answers } = useContext(SurveyContext);
  const queryParams = formatQueryParams(answers);

  const { data } = useQuery(["survey"], () => {
    return fetch(`http://localhost:8000/results?${queryParams}`).then((res) =>
      res.json()
    );
  });

  return (
    <ResultsTitle theme={theme}>
      Les compétences dont vous avez besoin :
      {data?.resultsData &&
        data?.resultsData.map((result:any, index:number) => (
          <JobTitle key={`result-title-${index}-${result.title}`} theme={theme}>
            {formatJobList({title:result.title, listLength:data?.resultsData.length, index})}
          </JobTitle>
        ))}
    </ResultsTitle>
  );
};


export default Results;