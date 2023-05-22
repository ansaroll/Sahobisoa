import { useContext } from "react";
import { JobTitle, ResultsTitle } from "../../components/styled/Atom";
import { SurveyContext, ThemeContext } from "../../utils/context";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Divider, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import { Freelances } from "../freelances/Freelances";
import MainLoader from "../../components/atom/MainLoader";
import ScreenMessage from "../../components/atom/ScreenMessage";

export function formatJobList({ title, listLength, index }: any): string {
  if (index === listLength - 1) {
    return title;
  } else {
    return `${title}, `;
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
  const themeGlobal = useTheme();
  const { answers } = useContext(SurveyContext);
  const queryParams = formatQueryParams(answers);


  const isSmOrDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const isMdOrDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));


  const { data: results, isLoading: isGettingResultsLoading } = useQuery<Array<TResultsSkills>>(["survey"], async () => {
    const res = await fetch(`https://cyan-juvenile-drain.glitch.me/results?${queryParams}`);
    return await res.json();
  });

  const { data: freelances, isLoading } = useQuery<Array<Freelances>>(["freelanceProfiles"], async () => {
    const res = await fetch(`https://cyan-juvenile-drain.glitch.me/freelances`)
    return await res.json()
  });

  if (isLoading || isGettingResultsLoading) {
    return (
      <>
        <MainLoader />
      </>
    )
  }


  return (
    <Container>
      <ResultsTitle theme={theme}>
        <Typography variant={isMdOrDown ? "h4" : "h3"} style={{
          wordBreak: "break-word",
          width: "100%",
        }}>

          {
            isLoading &&
            <Box width="100%" display="flex" justifyContent="center" py={4}>
              <CircularProgress />
            </Box>
          }

          {
            (!results?.length && !isLoading) &&
            <ScreenMessage>
              <>
                <Typography variant="h2">
                  Il semble que vous n'avez pas besoin des competences 🤗 .
                </Typography>
              </>
            </ScreenMessage>
          }
          {
            (!!results?.length && !isLoading) &&
            results?.map((result: any, index: number) => (
              <span
                style={{
                  backgroundColor: theme == "dark" ? themeGlobal.palette.secondary.main : themeGlobal.palette.primary.light,
                  marginInline: 5,
                  paddingInline: 5,
                  borderRadius: 5,
                }}
              >
                {formatJobList({ title: result.title, listLength: results?.length, index }).toUpperCase()}
              </span>
            ))
          }
        </Typography>
      </ResultsTitle>

      {
        (!!results?.length && !isLoading) &&
        results?.map((result: any, index: number) => {
          return (
            <Box pb={10}>
              <Typography variant="h4" py={4}>
                {result.title.toUpperCase()}
                <Typography variant="body1">
                  {result.description}
                </Typography>
              </Typography>

              <Divider />
              <Box>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={isSmOrDown ? 1 : (isMdOrDown ? 2 : 3)}
                  centeredSlides={isSmOrDown ? true : false}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {freelances?.filter(i => i.jobType == result.title).map((freelance) => {

                    return (
                      <SwiperSlide
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >

                        <Card sx={{ maxWidth: 345 }}>
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="240"
                            image={freelance.picture}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="text.primary">
                              {freelance.name}
                              {!freelance.isActive && <span> 🟢</span>}
                            </Typography>
                            <Typography color="text.primary" variant="h6" style={{ color: "primary" }}> {freelance.job} </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                          </CardActions>
                        </Card>

                      </SwiperSlide>
                    )

                  })}
                </Swiper>
              </Box>
            </Box>
          )

        })
      }

    </Container>
  );
};


export default Results;

type TResultsSkills = {
  description?: string,
  title?: string
}