"use client";

import CardHeroes from "@/components/Heroes/CardHeroes";
import TabFilter from "@/components/Heroes/TabFilter";
import { getHeroesResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  const fetchData = async () => {
    const data = await getHeroesResponse("/api/heroes");
    setHeroes(data);
    setFilteredHeroes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center mt-16 min-h-screen">
      <div className="mx-auto max-w-7xl w-full px-4 py-6">
        <h1 className="text-5xl sm:text-7xl text-color-accent text-center font-tungsten">
          ALL HEROES
        </h1>
        {heroes.length !== 0 && (
          <div className="mt-5 max-w-screen-lg mx-auto">
            <TabFilter dataHero={heroes} setFilter={setFilteredHeroes} />
            <CardHeroes heroes={filteredHeroes} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
