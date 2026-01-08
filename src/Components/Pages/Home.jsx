import { Outlet, useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import CoffeeCategories from "../CoffeeCategories/CoffeeCategories";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="flex flex-col space-y-10">
           <Banner/>
           <div className="flex justify-center items-center">
            <CoffeeCategories categories={data}/>
           </div>
        </div>
    );
};

export default Home;