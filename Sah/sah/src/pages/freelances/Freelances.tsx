import { Container } from "@mui/system";
import { Card } from "../../components/Card";
import { useContext } from "react";
import { CircularProgress, Typography, Grid } from "@mui/material";
import { ThemeContext } from "../../utils/context";
import { useQuery } from "@tanstack/react-query";
import { SurveyContainer } from "../../components/styled/Atom";
import useFreelance from "../../utils/hooks/useFreelance";

export const Freelances = () => {
  const { theme } = useContext(ThemeContext);

  const { queryResult } = useFreelance("344");
  const { data: free, isLoading: isFreeLoading } = queryResult;

  console.log({ free });
  const { data, isLoading } = useQuery<Array<any>>(
    ["freelanceProfiles"],
    async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/freelances`);
      return await res.json();
    }
  );

  if (isLoading || isFreeLoading) {
    return (
      <SurveyContainer data-testid="loader">
        <CircularProgress sx={{ mt: 15 }} />
      </SurveyContainer>
    );
  }

  return (
    <Container sx={{ mb: 10 }}>
      <Typography
        variant="h4"
        my={2}
        color={theme == "dark" ? "secondary.light" : "primary"}
      >
        Freelances 👩‍💻👨‍💻👩‍💻
      </Typography>
      <Grid container spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        {data && free?.map((profile, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture}
              title={profile.lastName}
              isActive={profile.isActive}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export type Freelances = {
  id: string;
  name: string;
  job: string;
  picture: string;
  isActive: boolean;
  jobType: string;
  tjm: number;
};
