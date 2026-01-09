import Cards from "../CoffeeCategories/Cards";
import { getValue, removeData } from "../Utitlites";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const Dashboard = () => {
  const favourites = getValue();
  const [coffees, setCoffee] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCoffee(favourites);
  }, []);

//removing data
const handleRemove = (item)=>{
    removeData(item)
    setCoffee([]);
    // console.log(item)
}    

  return (
  <>
  <div className="text-center my-10">
    <h1 className="text-4xl font-light">Welcome to Dashboard</h1>
    <p className="text-lg font-light">Manage coffees that you have previously added as favorite. You can view or remove them from here.</p>
  </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {coffees.map((coffee) => (
        <div key={coffee.id}
          className="
           mx-auto
        card bg-base-200 shadow-sm
        cursor-pointer
        rounded-2xl
        relative
        "
        >
          <figure className="w-full">
              <img
                className="w-full h-56 object-cover rounded-t-2xl"
                src={coffee.image}
                alt={coffee.name}
              />
            </figure>
            <div className="p-5 space-y-4">
              <h1 className="text-3xl">{name}</h1>
              <div className="text-stone-500">
                <p>Category : {coffee.category}</p>
                <p>Type : {coffee.type}</p>
                <p>Origin : {coffee.origin}</p>
                <p>Rating : {coffee.rating}</p>
                <p>Popular : {coffee.popularity}</p>
              </div>
            </div>
            <div className="absolute -right-2 -top-4">
                <button 
                onClick={()=> handleRemove(coffee)}
                className="text-2xl bg-warning p-2 rounded-full hover:text-warning hover:bg-black cursor-pointer">
                    <FaRegTrashCan className="z-50"/>
                </button>
            </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Dashboard;
