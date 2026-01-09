import { Link } from "react-router";

const Cards = ({ coffee }) => {
  const {id, name, category, type, origin, rating, image, popularity } =
    coffee || {};
  return (
    <div
      className="
        card bg-base-200 shadow-sm
        hover:scale-110
        transition cursor-pointer
        duration-300
        hover:bg-base-300
        rounded-2xl
        "
    >
      <Link to={`/coffeeDetails/${id}`}>
        <figure className="w-full">
          <img
            className="w-full h-56 object-cover rounded-t-2xl"
            src={image}
            alt={name}
          />
        </figure>
        <div className="p-5 space-y-4">
          <h1 className="text-3xl">{name}</h1>
          <div className="text-stone-500">
            <p>Category : {category}</p>
            <p>Type : {type}</p>
            <p>Origin : {origin}</p>
            <p>Rating : {rating}</p>
            <p>Popular : {popularity}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
