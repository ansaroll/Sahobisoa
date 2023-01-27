import { useTheme } from "@mui/material/styles";
import { CardImage } from "./styled/CardImage";
import { CardLabel } from "./styled/CardLabel";
import { CardWrapper } from "./styled/CardWrapper";
import { useState } from "react";
import { CardTitle } from "./styled/Atom";

export const Card = ({ label, title, picture, isActive }: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const star = isFavorite ? "🌟" : "";
  const theme = useTheme();
  return (
    <CardWrapper
      gap={3}
      py={5}
      isactive={isActive?.toString()}
      theme={theme}
      onClick={() => setIsFavorite(!isFavorite)}
    >
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <CardTitle>
        {star} {title} {star}
      </CardTitle>
    </CardWrapper>
  );
};

type Props = {
  label?: string;
  title?: string;
  picture?: string;
  isActive?: boolean;
};
