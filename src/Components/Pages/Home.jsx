import { Outlet, useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import CoffeeCategories from "../CoffeeCategories/CoffeeCategories";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="flex flex-col space-y-10">
      <Banner />
      {/* category button */}
      <CoffeeCategories categories={data} />
      {/* children outlet */}
      <div className="my-4">
      <Outlet/>
      </div>
    </div>
  );
};

export default Home;
