import { useParams, useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();

  const card = cards.find((item) => item.id == id);

  const { img, title, description, price } = card;

  console.log(cards, card, id);

  return (
    <div className="max-w-7xl mx-auto">
      <img className="rounded-xl" src={img} alt="" />
      <div className="flex items-center justify-between mt-6">
        <h2 className="text-5xl font-bold">{title}</h2>
        <button className="font-medium rounded-full text-white px-5 py-2 bg-neutral">
          Price: ${price}
        </button>
      </div>
      <p className="mt-6 mb-8 leading-8">{description}</p>
    </div>
  );
};

export default CardDetails;
