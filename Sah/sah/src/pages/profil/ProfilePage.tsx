import "./ProfilePage.css";
import { Grid, useTheme, Divider, Box, Avatar } from "@mui/material";

const ProfilePage = (props: Props) => {
  const theme = useTheme();
  return (
    <Grid
      container
      py={4}
      pb={10}
      justifyContent="space-between"
      position="relative"
    >
      <Grid item xs={12} sm={12} md={3}>
        <Avatar
          src={props.image}
          sizes="200 200"
          alt="Profile"
           sx={{ width: 200, height: 200 }}
          style={{
            border: props.isActive ? "4px solid green" : `4px solid ${theme.palette.primary.main}`,
            borderRadius: "50%",
          }}
        />
      </Grid>
      
      <Grid
        item
        xs={12}
        sm={12}
        md={9}
        pt={{ xs: 2, sm: 0 }}
        style={{
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "5px",
          padding: "1rem",
        }}
      >
        <Box className="profile-description" pb={2}>
          <h3>Moi de mon point de vue</h3>
          <Divider
            color="primary.main"
            sx={{
              height: ".5px",
              backgroundColor: "primary.main",
            }}
          />
          <p>{props.description}</p>
        </Box>
        <Box className="profile-location" pb={2}>
          <h3>Adresses:</h3>
          <Divider
            color="primary.main"
            sx={{
              height: ".5px",
              backgroundColor: "primary.main",
            }}
          />
          <p>{props.address1}</p>
          <p>{props.address2}</p>
        </Box>
        <Box className="profile-skills" pb={2}>
          <h3>Compétences en développement web:</h3>
          <Divider
            color="primary.main"
            sx={{
              height: ".5px",
              backgroundColor: "primary.main",
            }}
          />
          <Box py={2}>
            <ol>
              {props.skills?.map((skill) => (
                <li>{skill}</li>
              ))}
            </ol>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;

type Props = {
  image?: string;
  description?: string;
  address1?: string;
  address2?: string;
  skills?: string[];
  name?: string;
  isActive?: boolean;
};
