"use client";

import TabFilter from "@/components/AllHeroes/TabFilter";
import { getHeroesResponse } from "@/libs/api-libs";
import { useEffect, useState } from "react";

const Page = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  const fetchData = async () => {
    const data = await getHeroesResponse("/api/hero");
    setHeroes(data);
    setFilteredHeroes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center mt-16 min-h-screen">
      <div className="mx-auto max-w-7xl w-full px-4 py-6">
        <h1 className="text-7xl text-color-accent text-center font-tungsten">
          ALL HEROES
        </h1>
        {heroes.length !== 0 && (
          <div className="mt-5 max-w-screen-lg mx-auto">
            <TabFilter dataHero={heroes} setFilter={setFilteredHeroes} />
            {/* <div className="mt-9 grid grid-cols-5 gap-4">
            <AnimatePresence>
              {Heroes.map((data) => (
                <motion.div
                  key={data.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/hero/${data.id}`}
                    className={classNames(
                      "block relative h-72 overflow-hidden",
                      "transition ease-out duration-300",
                      "hover:transform hover:scale-[1.15] hover:z-20"
                    )}
                  >
                    <Image
                      src={data.potrait}
                      width={390}
                      height={240}
                      alt={data.name}
                      quality={90}
                      priority={true}
                      className="h-full w-full object-top object-cover transform scale-[1.02]"
                    />
                    <p className="absolute bottom-0 z-10 left-4 text-base text-color-white">
                      {data.name}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div> */}
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
