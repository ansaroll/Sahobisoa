import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export const Survey = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <Typography variant="h1" gutterBottom>
      Questionnaire {id} 🧮
    </Typography>
  );
};
