import { Link, NavLink } from "react-router";

const CoffeeCategories = ({categories}) => {
  return (
      <div role="tablist" className="tabs tabs-lift flex flex-col lg:flex-row justify-center items-center my-10">
        {
        categories.map(category=>
        <NavLink
        to={`/coffeeCards/${category.category}`}
        key={category.id} role="tab" className={({isActive})=>
        isActive ? 'tab tab-active text-2xl' : 'tab text-2xl'}>
          {
            category.category
          }
        </NavLink>
          )
        }
      </div>
  );
};

export default CoffeeCategories;
