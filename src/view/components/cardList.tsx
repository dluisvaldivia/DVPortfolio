
import Card from "./card";
import { cardsData } from "../../models/cardsData";

const CardsList = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardsList;
