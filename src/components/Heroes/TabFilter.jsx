import { difficulties } from "@/app/heroes/difficulties";
import { getRoles, getTableResponse } from "@/libs/api-libs";
import classNames from "@/libs/classNames";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import React, { Fragment, useEffect, useRef, useState } from "react";

const TabFilter = ({ dataHero, setFilter }) => {
  const [roles, setRoles] = useState([]);
  const [tabActive, setTabActive] = useState(0);
  const [difficulty, setDifficulty] = useState(difficulties[0]);

  const searchRef = useRef();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const roles = await getRoles("/api/data/role");
    console.log(roles);
    setRoles(roles);
  };

  const handleTabChange = (id) => {
    setTabActive(id);
    const filtered = dataHero.filter((hero) => hero.role_id.includes(id));
    setFilter(id === 0 ? dataHero : filtered);
  };

  const handleSelectChange = (diffi, threshold) => {
    const filtered = dataHero.filter(
      (hero) =>
        hero.rating_value >= threshold - 10 && hero.rating_value <= threshold
    );
    setFilter(threshold === 0 ? dataHero : filtered);
    setDifficulty(diffi);
  };

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const filtered = dataHero.filter((hero) => hero.name.startsWith(keyword));
      setTabActive(0);
      setDifficulty(0);
      setFilter(keyword);
    }
  };

  return (
    <div className="flex justify-center flex-wrap py-0.5 border border-color-accent w-full ">
      <div className="flex justify-center items-center flex-wrap">
        {roles.map((role) => {
          const { icon, ...data } = role;

          return (
            <button
              key={data.id}
              className={classNames(
                "px-3 py-2 text-xs font-dinnext uppercase font-bold",
                "ring-0 focus:outline-none focus:ring-0",
                tabActive === data.id
                  ? "bg-color-accent text-color-dark"
                  : "text-color-white hover:bg-color-primary hover:text-color-dark"
              )}
              onClick={() => handleTabChange(data.id)}
            >
              {data.name}
            </button>
          );
        })}
      </div>

      <div className=" w-auto sm:ml-9 py-1 sm:py-0">
        <Listbox
          value={difficulty}
          onChange={(value) => {
            handleSelectChange(value, value.threshold);
          }}
        >
          <div className="relative w-28">
            <Listbox.Button className="relative w-full cursor-default bg-color-primary py-2 pl-3 pr-10 shadow-md focus:outline-none focus-visible:ring-0 sm:text-sm">
              <span className="block truncate">{difficulty.name}</span>
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
                      classNames(
                        "relative cursor-default select-none py-2 px-4",
                        active ? "text-color-accent" : "text-color-secondary"
                      )
                    }
                    value={difficulty}
                  >
                    {({ selected }) => (
                      <span
                        className={`block ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {difficulty.name}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      {/* <div className="relative w-40 ml-24">
        <input
          ref={searchRef}
          type="search"
          className="block py-2 px-2.5 w-full z-20 text-sm text-color-secondary bg-color-primary focus:ring-0 focus:outline-none focus:bg-color-white"
          placeholder="Name..."
          onKeyDown={handleSearch}
          required
        />
      </div> */}
    </div>
  );
};

export default TabFilter;
