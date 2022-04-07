import * as Styled from './styled';

export interface CardProps {
  onClick: () => void;
  color: string;
  size: number;
}

const Card = ({ size, color, onClick }: CardProps) => {
  return <Styled.Card size={size} color={color} onClick={onClick} />;
};

export default Card;
