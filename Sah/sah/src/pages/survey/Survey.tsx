import { CircularProgress } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/color'

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
  padding: 30px;
  border: 1px solid ${colors.primary};
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

export const Survey = () => {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber || '0')
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

   const queryClient = new QueryClient()

  const { isLoading, data } = useQuery(['survey'], () =>{
    return fetch(`http://localhost:8000/survey`).then(res => res.json())
  })

  useEffect(() => {
    if (data) {
      setSurveyData(data.surveyData)
    }
    console.log({surveyData});
    
  }, [data])

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <SurveyContainer>
      {!isLoading && <QuestionTitle>Question {questionNumber}</QuestionTitle>}
      {
        !isLoading && 
        <p>
          {data[1]}
        </p> 
      }

    </SurveyContainer>
  )
}

export default Survey