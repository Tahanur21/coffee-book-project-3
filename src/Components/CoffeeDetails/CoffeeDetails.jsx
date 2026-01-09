import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import nutrition from "../../assets/nutrition.png";
import { addLocalStorage, getValue } from "../Utitlites";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [coffees, setCoffee] = useState([]);
  const [isActive,setActive] = useState(!true);
  useEffect(() => {
    const filterData = data.filter((coffee) => coffee.id === parseInt(id));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCoffee(filterData);
    const favourites = getValue()
    const isExist = favourites.find(item=> item === filterData);
    if(isExist){
      setActive(!false);
    }
  }, [data, id]);

  // const navigate = useNavigate()
  const handleStorage = (id)=>{
    addLocalStorage(id)
    setActive(!false);
    // navigate(`/dashboard/${coffees}`)
  }
  return (
    <div>
      {coffees.map((coffee) => (
        <div 
        className="space-y-10"
        key={coffee.id}>
            <h1 className="text-center text-3xl">{coffee.description}</h1>
          <div className="space-y-8">
            <div className="w-full">
              <img
              className="rounded-2xl w-full h-125 object-cover"
              src={coffee.image} alt="_blank" />
            </div>
            <div className="space-y-3">
              <div className="flex flex-col lg:flex-row justify-between items-center text-lg">
                <div>
                <h1 className="text-4xl font-light">{coffee.name}</h1>
                <p>Popularity : {coffee.popularity}</p>
                <p>Rating : {coffee.rating}</p>
                </div>
                {/* button for dashboard */}
                <div>
                    <Link>
                    <button
                    disabled={isActive}
                    onClick={()=>
                      handleStorage(coffee)
                      
                    }
                    className="btn btn-warning text-white">Add Favourites</button>
                    </Link>
                </div>
              </div>
              <div className="">
                <h1 className="text-3xl font-light">Making Process : </h1>
                <p>{coffee.making_process}</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
              <div className="space-y-6">
                {/* text */}
                <div className="text-lg">
                  <h1 className="text-4xl font-light mb-4">Ingredients :</h1>
                  <ul className="text-2xl ml-20">
                    {coffee.ingredients.map((a, idx) => (
                    <li className="list-disc" key={idx}>{a}</li>
                  ))}
                  </ul>
                </div>
                <div className="text-lg">
                  <h1 className="text-4xl font-light mb-4">Nutrition :</h1>
                  <ul className="text-2xl ml-20">
                    {(() => {
                      const list = [];

                      for (let key in coffee.nutrition_info) {
                        list.push(
                          <li className="list-disc" key={key}>
                            {key}: {coffee.nutrition_info[key]}
                          </li>
                        );
                      }

                      return list;
                    })()}
                  </ul>
                </div>
              </div>
              <div className="">
                {/* image */}
                <img
                className="w-3xl"
                src={nutrition} alt="_blank" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeDetails;
