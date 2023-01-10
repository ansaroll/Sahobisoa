import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Error = () => {

  return (
    <>
      <Typography>Error 404: page not found</Typography>
      <Button>
        <Link to={'/'}>Go back to home</Link>
      </Button>
    </>
  )
};

export default Error;
