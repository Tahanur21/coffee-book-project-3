import { useLoaderData } from "react-router";
import Cards from "../CoffeeCategories/Cards";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [sorting, setSort] = useState(data);
    const handelSort = (sort)=>{
        // ascending way
        if(sort === 'rating'){
            const sorted = [...data].sort((a,b)=> b.rating - a.rating);
            setSort(sorted);
        }
        // descending way
        else if(sort === 'popularity'){
            const sorted = [...data].sort((a,b)=> a.popularity - b.popularity);
            setSort(sorted);
        }
    }
    return (<>
        <div className="flex justify-between items-center">
            <h1 className="text-3xl">Sort Coffee's by Popularity & Rating : </h1>
            <div className="space-x-3">
                <button 
                onClick={()=>handelSort('rating')}
                className="btn btn-warning text-white">Sort By Rating</button>
                <button
                 onClick={()=>handelSort('popularity')}
                className="btn btn-warning text-white">Sort By Popularity</button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 mt-10">
            {
                sorting.map(coffee=>
                    <Cards
                    key={coffee.id}
                    coffee={coffee}
                    />
                )
            }
        </div>
    </>
    );
};

export default Coffees;