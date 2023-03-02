import { useContext } from "react";
import { JobTitle, ResultsTitle } from "../../components/styled/Atom";
import { SurveyContext, ThemeContext } from "../../utils/context";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import { Freelances } from "../freelances/Freelances";

export function formatJobList({ title, listLength, index }: any): string {
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

  const { data: freelances, isLoading } = useQuery<Array<Freelances>>(
    ["freelanceProfiles"],
    () => {
      return fetch(`http://localhost:8000/freelances`).then((res) =>
        res.json()
      );
    }
  );

  return (
    <>
      <ResultsTitle theme={theme}>
        <Typography variant="h4">
          Les compétences dont vous avez besoin :
        </Typography>
        <Typography variant="h2">
          {data?.resultsData &&
            data?.resultsData.map((result: any, index: number) => (
              <>
                {formatJobList({ title: result.title, listLength: data?.resultsData.length, index }).toUpperCase()}
              </>
            ))
          }
        </Typography>
      </ResultsTitle>

      {/* <Box>
        <Typography variant="body1">
          Nous avons trouvé {freelances?.length} profils qui correspondent à vos besoins.
          Vous pouvez les contacter directement via leur profil LinkedIn.Si vous souhaitez
          en savoir plus sur les profils, vous pouvez consulter leur CV.Vous trouverez ci-dessous
          les profils qui correspondent à vos besoins.
        </Typography>
      </Box> */}

      {data?.resultsData &&
        data?.resultsData.map((result: any, index: number) => {
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
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {freelances?.filter(i => i.jobType == result.title).map((freelance) => {

                    return (
                      <SwiperSlide>

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

    </>
  );
};


export default Results;