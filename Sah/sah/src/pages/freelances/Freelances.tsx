import { Container } from "@mui/system";
import { Card } from "../../components/Card";
import styled from "styled-components";

const url = 'https://picsum.photos/300/300'

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: 'https://picsum.photos/300/300',
    isActive:false
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: 'https://picsum.photos/300/300',
    isActive:true
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: 'https://picsum.photos/300/300',
    isActive:false

  }, {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: 'https://picsum.photos/300/300',
    isActive:false

  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: 'https://picsum.photos/300/300',
    isActive:false
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: 'https://picsum.photos/300/300',
    isActive:true
  }, {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: 'https://picsum.photos/300/300',
    isActive:false
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: 'https://picsum.photos/300/300',
    isActive:false
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: 'https://picsum.photos/300/300',
    isActive:false
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
            isActive={profile.isActive}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};
