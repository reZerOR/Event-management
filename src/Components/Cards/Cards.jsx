import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-11">Our Services</h2>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 justify-items-center">
        {card.map((card) => (
          <Card key={card.id} card={card}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
