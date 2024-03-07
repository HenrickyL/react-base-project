import { Game } from "../../_middlewares/StateController";
import { CardContainer, Category, Description, Title } from "./style";

// Componente Card
interface CardProps {
    game: Game;
  }

export const GameCard = ({ game }: CardProps) => {
    return (
        <CardContainer>
            {game.imageUrl && <img src={game.imageUrl} alt={game.title} style={{ maxWidth: '100%' }} />}
            <Title>{game.title}</Title>
            <Category>Category: {game.category}</Category>
            <Description>{game.description}</Description>
        </CardContainer>
    );
};