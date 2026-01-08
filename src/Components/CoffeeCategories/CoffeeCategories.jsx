import { Link } from "react-router";

const CoffeeCategories = ({categories}) => {
  return (
      <div role="tablist" className="w-full tabs tabs-lift">
        {
        categories.map(category=>
        <Link key={category.id} role="tab" className="tab flex justify-around">
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
