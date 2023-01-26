import { Container } from "@mui/system";
import { Card } from "../../components/Card";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { ThemeContext } from "../../utils/context";
import { useQuery } from "@tanstack/react-query";
import {
  SurveyContainer,
  QuestionContent,
  LinkWrapper,
} from "../../components/styled/Atom";

const url = "https://i.pravatar.cc/500";

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(3, 1fr);
`;
export const Freelances = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useQuery<Array<Freelances>>(
    ["freelanceProfiles"],
    () => {
      return fetch(`http://localhost:8000/freelances`).then((res) =>
        res.json()
      );
    }
  );

  if (isLoading) {
    return (
      <SurveyContainer data-testid="loader">
        <CircularProgress sx={{ mt: 15 }} />;
      </SurveyContainer>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      <Typography
        variant="h4"
        my={2}
        color={theme == "dark" ? "secondary.light" : "primary"}
      >
        Freelances 👩‍💻👨‍💻👩‍💻
      </Typography>
      <CardsContainer>
        {data?.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.job}
            picture={profile.picture}
            title={profile.name}
            isActive={profile.isActive}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

type Freelances = {
  id: string;
  name: string;
  job: string;
  picture: string;
  isActive: boolean;
};
