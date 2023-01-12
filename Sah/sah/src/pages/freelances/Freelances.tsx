import { Container } from "@mui/system";
import { Card } from "../../components/Card";
import styled from "styled-components";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: "/assets/profile.png",
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: "/assets/profile.png",
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: "/assets/profile.png",
  }, {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: "/assets/profile.png",
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: "/assets/profile.png",
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: "/assets/profile.png",
  }, {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: "/assets/profile.png",
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: "/assets/profile.png",
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: "/assets/profile.png",
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 250px 300px;
  grid-template-columns: repeat(3, 1fr);
`;
export const Freelances = () => {
  return (
    <Container maxWidth="lg">
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
