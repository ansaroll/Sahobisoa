import { useTheme } from "@mui/material/styles";
import { CardImage } from "./styled/CardImage";
import { CardLabel } from "./styled/CardLabel";
import { CardWrapper } from "./styled/CardWrapper";

export const Card = ({ label, title, picture, isActive }: Props) => {
  const theme = useTheme();
  return (
    <CardWrapper isActive={isActive} theme={theme}>
      <CardLabel theme={theme}>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span style={{color: theme.palette.primary.light}}>{title}</span>
    </CardWrapper>
  );
};

type Props = {
  label?: string;
  title?: string;
  picture?: string;
  isActive?: boolean;
};
