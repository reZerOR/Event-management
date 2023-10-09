import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Card = ({ card }) => {
  const { id, img, price, short_description, title } = card;
  return (
    <div data-aos="fade-down" className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[224px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold ">{title}</h2>
          <p className="flex-none text-lg font-medium">${price}</p>
        </div>
        <p>{short_description}</p>

        <div className="card-actions mt-2">
          <Link className="w-full" to={`/card/${id}`}>
            <button className="btn w-full btn-neutral">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
