import { getTableResponse } from "@/libs/api-libs";
import classNames from "@/libs/classNames";
import React, { useEffect, useState } from "react";

const TabFilter = ({ dataHero, setFilter }) => {
  const [roles, setRoles] = useState([]);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await getTableResponse("/api/data/role");
    setRoles([
      {
        id: 0,
        name: "All",
      },
      ...data,
    ]);
  };
  console.log(roles);

  const handleTabChange = (id) => {
    setTabActive(id);
    const filtered = dataHero.filter((hero) => hero.role_id.includes(id));
    if (id == 0) {
      setFilteredHeroes(dataHero);
    } else {
      setFilteredHeroes(filtered);
    }
  };

  return (
    <div className="flex justify-center py-0.5 border border-color-accent w-full">
      {roles.map((role) => {
        const { icon, ...data } = role;

        return (
          <button
            key={data.id}
            className={classNames(
              "px-3 py-2 text-xs font-dinnext uppercase font-bold",
              "ring-0 focus:outline-none focus:ring-0",
              tabActive == data.id
                ? "bg-color-accent text-color-dark"
                : "text-color-white hover:bg-color-primary hover:text-color-dark"
            )}
            onClick={() => handleTabChange(data.id)}
          >
            {data.name}
          </button>
        );
      })}

      {/* <div className="w-auto ml-9">
        <Listbox value={difficulty} onChange={setDifficulty}>
          <div className="relative w-28">
            <Listbox.Button className="relative w-full cursor-default bg-color-primary py-2 pl-3 pr-10 shadow-md focus:outline-none focus-visible:ring-0 sm:text-sm">
              <span className="block truncate">{Difficulty.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-color-secondary"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 w-full overflow-auto bg-color-white py-1 text-sm shadow-lg ring-0 focus:outline-none">
                {difficulties.map((difficulty) => (
                  <Listbox.Option
                    key={difficulty.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active ? "text-color-accent" : "text-color-secondary"
                      }`
                    }
                    value={difficulty}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {difficulty.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="relative w-40 ml-24">
        <input
          type="search"
          className="block py-2 px-2.5 w-full z-20 text-sm text-color-secondary bg-color-primary focus:ring-0"
          placeholder="Name..."
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-color-white bg-color-accent focus:ring-0 focus:outline-none"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div> */}
    </div>
  );
};

export default TabFilter;
