import { CardImage } from "./styled/CardImage";
import { CardLabel } from "./styled/CardLabel";
import { CardWrapper } from "./styled/CardWrapper";

export const Card = ({ label, title, picture, isActive }: Props) => {
  return (
    <CardWrapper isActive={isActive}>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </CardWrapper>
  );
};

type Props = {
  label?: string;
  title?: string;
  picture?: string;
  isActive?: boolean;
};
