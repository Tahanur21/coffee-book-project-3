import { Link } from "react-router";

const CoffeeCategories = ({categories}) => {
  return (
      <div role="tablist" className="tabs tabs-lift flex flex-col lg:flex-row justify-evenly items-center">
        {
        categories.map(category=>
        <Link
        to={`/coffeeCards/${category.category}`}
        key={category.id} role="tab" className="tab">
          {
            category.category
          }
        </Link>
          )
        }
      </div>
  );
};

export default CoffeeCategories;
