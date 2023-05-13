import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeTitleCard from "../../components/HomeTitleCard/HomeTitleCard";

const Home = () => {
  const { data } = useLoaderData();
  return (
    <div className="bg-sky-500/100 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
      {data.map((item) => (
        <HomeTitleCard key={item.id} info={item} />
      ))}
    </div>
  );
};

export default Home;
