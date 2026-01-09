import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Cards from "../CoffeeCategories/Cards";

const CoffeeCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [coffees,setCoffees] = useState(data);
    useEffect(()=>{
        if(category){
            const filterData = [...data].filter(coffees=>coffees.category === category);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCoffees(filterData)
        }
        else{
            setCoffees(data.slice(0,6))
        }
    },[data,category]);

    console.log(category)
    return (
        <div 
        className="
        grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 justify-center items-center px-5 gap-10
        ">
            {
            coffees.map(coffee=>
                <Cards
                key={coffee.id}
                coffee={coffee}
                />
            )
            }
            <div>
                {/* i can aslo use navigate hook */}
                <Link to='/coffees'>
                    <button className="btn btn-warning text-white">View All</button>
                </Link>
            </div>
        </div>
    );
};

export default CoffeeCards;