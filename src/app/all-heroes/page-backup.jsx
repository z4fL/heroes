"use client";
import { Listbox, Tab, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { roles } from "../api/roles";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { heroes } from "../api/heroes";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const difficulties = [
  { id: 0, name: "All" },
  { id: 1, name: "Very Easy" },
  { id: 2, name: "Easy" },
  { id: 3, name: "Normal" },
  { id: 4, name: "Hard" },
  { id: 5, name: "Very Hard" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  const [tabActive, setTabActive] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState(difficulties[0]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  useEffect(() => {
    setFilteredHeroes(heroes);
  }, []);

  const handleTabChange = (id) => {
    setTabActive(id);
    const filtered = heroes.filter((hero) => hero.role_id.includes(id));
    if (id == 0) {
      setFilteredHeroes(heroes);
    } else {
      setFilteredHeroes(filtered);
    }
  };

  return (
    <main className="flex flex-col items-center mt-16 min-h-screen">
      <div className="mx-auto max-w-7xl w-full px-4 py-6">
        <h1 className="text-7xl text-color-accent text-center font-tungsten">
          ALL HEROES
        </h1>
        <div className="mt-5 max-w-screen-lg mx-auto">
          <Tab.Group
            selectedIndex={tabActive}
            onChange={(index) => {
              handleTabChange(index);
            }}
          >
            <Tab.List className="flex justify-center py-0.5 border border-color-accent w-full">
              {roles.map((role) => (
                <Tab
                  key={role.id}
                  className={({ selected }) =>
                    classNames(
                      "px-3 py-2 text-xs font-dinnext uppercase font-bold",
                      "ring-0 focus:outline-none focus:ring-0",
                      selected
                        ? "bg-color-accent text-color-dark"
                        : "text-color-white hover:bg-color-primary hover:text-color-dark"
                    )
                  }
                >
                  {role.name}
                </Tab>
              ))}

              <div className="w-auto ml-9">
                <Listbox
                  value={selectedDifficulty}
                  onChange={setSelectedDifficulty}
                >
                  <div className="relative w-28">
                    <Listbox.Button className="relative w-full cursor-default bg-color-primary py-2 pl-3 pr-10 shadow-md focus:outline-none focus-visible:ring-0 sm:text-sm">
                      <span className="block truncate">
                        {selectedDifficulty.name}
                      </span>
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
                                active
                                  ? "text-color-accent"
                                  : "text-color-secondary"
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
              </div>
            </Tab.List>
            <Tab.Panels className="mt-9">
              {Array.from({ length: 7 }).map((_, index) => (
                <Tab.Panel
                  key={index}
                  className={classNames("grid grid-cols-3 gap-4")}
                >
                  <AnimatePresence>
                    {filteredHeroes.map((data) => (
                      <motion.div
                        key={data.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className={classNames(
                            "relative h-72 overflow-hidden",
                            "transition ease-out duration-300",
                            "hover:transform hover:scale-[1.15] hover:z-20"
                          )}
                        >
                          <Image
                            src={data.url}
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
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </main>
  );
};

export default page;
