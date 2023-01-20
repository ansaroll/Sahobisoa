import { Container } from "@mui/system";
import { Card } from "../../components/Card";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { Typography } from "@mui/material";
import { ThemeContext } from "../../utils/context";

const url = "https://i.pravatar.cc/500"

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: "https://i.pravatar.cc/300",
    isActive:false
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: "https://i.pravatar.cc/200",
    isActive:true
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: "https://i.pravatar.cc/400",
    isActive:false

  }, {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: "https://i.pravatar.cc/450",
    isActive:false

  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: "https://i.pravatar.cc/350",
    isActive:false
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: "https://i.pravatar.cc/250",
    isActive:true
  }, {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: "https://i.pravatar.cc/255",
    isActive:false
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: "https://i.pravatar.cc/355",
    isActive:false
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: "https://i.pravatar.cc/356",
    isActive:false
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(3, 300px);;
  grid-template-columns: repeat(3, 1fr);
`;
export const Freelances = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <Container maxWidth="lg" sx={{mb:10}}>
      <Typography variant="h4" my={2} color={theme == 'dark' ? 'secondary.light' : "primary"}>Freelances 👩‍💻👨‍💻👩‍💻</Typography>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
            isActive={profile.isActive}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
