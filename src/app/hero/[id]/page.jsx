"use client";
import React, { Fragment, useEffect, useState } from "react";
import { heroes } from "@/app/api/heroes";
import Image from "next/image";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Page = ({ params: { id } }) => {
  const ling = heroes[0];
  let [isOpen, setIsOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState(ling.abilities[0]);

  const handleActiveSkill = (skill) => {
    if (activeSkill !== skill) {
      setActiveSkill(skill);
    }
  };

  const updateSkillDescription = (description, special_terms) => {
    const updatedSentence = special_terms.reduce((acc, term) => {
      const placeholder = `%${term.name}%`;
      const regex = new RegExp(placeholder, "g");
      const replacement = `<span style="color:${term.color}" class="whitespace-nowrap">${term.value}</span>`;

      return acc.replace(regex, replacement);
    }, description);

    return (
      <p
        className="mt-3 mb-4 whitespace-pre-wrap text-pretty text-base text-color-white inline"
        dangerouslySetInnerHTML={{ __html: updatedSentence }}
      />
    );
  };

  return (
    <main className="relative w-full mt-14 ">
      <div className="relative w-full overflow-hidden">
        <div className="h-[39rem] w-full">
          <Image
            src={ling.splash_art}
            alt={ling.name}
            width={1280}
            height={720}
            className="w-full h-full object-cover object-top"
            priority
          />
        </div>
        <Disclosure>
          {({ open }) => (
            <div className="absolute bottom-6 left-28 z-20 w-full max-w-lg bg-color-white p-5">
              <Disclosure.Button className="absolute -top-10 left-0 flex bg-color-white px-4 py-2 text-left text-sm font-medium text-color-tertiary hover:bg-color-primary focus:outline-none focus-visible:ring-0">
                <span>{open ? "Minimize" : "Maximize"}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } ml-3 h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <div className="flex justify-between items-center pb-3">
                <div className="flex shrink w-full">
                  <div className="flex flex-col font-tungsten uppercase mr-7">
                    <h3 className="text-color-secondary text-2xl leading-4">
                      {ling.skin_name}
                    </h3>
                    <h2 className="text-color-accent text-7xl">{ling.name}</h2>
                  </div>
                  <div className="flex justify-center items-center">
                    <h3 className="text-color-secondary text-base font-bold font-dinnext ">
                      {ling.specialities.join(" / ")}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center divide-x divide-color-secondary/40">
                  <div className="flex items-center space-x-1 w-full pr-2">
                    {ling.roles.map((role, index) => (
                      <div
                        key={role.role_id}
                        className="flex flex-col justify-center items-center has-tooltip"
                      >
                        <Image
                          src={role.role_icon}
                          alt={role.name}
                          width={320}
                          height={320}
                          className={`max-w-9 max-h-9 ${
                            index === 1 ? "invert-[.30]" : "invert-[.50]"
                          }`}
                        />
                        <span className="tooltip bg-color-dark text-color-white text-xs -mt-20 p-2">
                          {role.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1 w-full pl-2">
                    {ling.positions.map((position, index) => (
                      <div
                        key={position.position_id}
                        className="flex flex-col justify-center items-center has-tooltip"
                      >
                        <Image
                          src={position.position_icon}
                          alt={position.name}
                          width={320}
                          height={320}
                          className={`max-w-9 max-h-9 ${
                            index === 1 ? "invert-[.30]" : "invert-[.50]"
                          }`}
                        />
                        <span className="tooltip bg-color-dark text-color-white text-xs -mt-20 p-2">
                          {position.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Transition
                className=" transition-all duration-500 overflow-hidden"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-96"
                leaveFrom="opacity-100 max-h-96"
                leaveTo="opacity-0 max-h-0"
              >
                <Disclosure.Panel className="mb-6">
                  <div className="w-full flex flex-wrap items-center justify-between py-3 mb-3 border-y border-color-secondary/40">
                    {ling.ratings.map((rating, index) => (
                      <div
                        key={index}
                        className="w-2/5 h-8 min-h-0 flex flex-col my-1"
                      >
                        <p className="w-full text-sm font-dinnext font-bold tracking-wide">
                          {rating.name}
                        </p>
                        <div className="w-full h-[6px] max-h-[6px] relative mt-1">
                          <div className="w-full h-full absolute left-0 top-0 bg-color-secondary"></div>
                          <div
                            style={{ width: `${rating.value}%` }}
                            className={`w-[0%] h-full absolute left-0 top-0 bg-color-accent`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="bg-color-dark px-4 py-2 text-sm font-medium text-color-white hover:bg-color-accent focus:outline-none focus-visible:ring-0"
                  >
                    More Details
                  </button>
                </Disclosure.Panel>
              </Transition>
              <div className="absolute bottom-0 left-0 w-full h-6 bg-color-tertiary"></div>
            </div>
          )}
        </Disclosure>
      </div>
      <div className="relative z-10 -mt-16 py-20 w-full bg-color-dark min-h-[400px]:">
        <div className="h-screen flex flex-col items-center">
          <h1 className="pb-5 text-5xl text-color-accent text-center font-tungsten uppercase">
            Skill introduction
          </h1>
          <div className="w-full max-w-screen-xl min-h-[542px] flex">
            <div className="w-[55%] mr-5">
              <div className="relative w-full pt-[56%] h-0">
                <div className="absolute top-0 left-0 w-full h-full z-10" />
                <div className="absolute top-0 left-0 w-full h-full bg-color-white"></div>
              </div>
              <div className="relative flex w-full justify-center flex-wrap -mt-10 z-20">
                {ling.abilities.map((ability, index) => (
                  <div
                    key={index}
                    style={{ backgroundImage: `url('${ability.icon}')` }}
                    className={classNames(
                      "relative w-20 h-20 mx-1 mb-2 cursor-pointer bg-cover bg-center bg-no-repeat rounded-full transition transform ease-in-out duration-100 hover:scale-110 shadow-[0px_0px_10px_rgb(0,0,0)]",
                      `${
                        activeSkill.name === ability.name
                          ? "filter-none"
                          : "filter saturate-0 brightness-75"
                      }`
                    )}
                    onClick={() => handleActiveSkill(ability)}
                  />
                ))}
              </div>
            </div>
            <div className="w-[45%] min-h-0 flex flex-col items-center">
              <div className="w-full h-full">
                <div className="flex w-full p-2 bg-[#1e293b]">
                  {activeSkill.icon && (
                    <Image
                      src={activeSkill.icon}
                      alt={activeSkill.name}
                      width={96}
                      height={96}
                      className="m-3 max-w-24 max-h-24 rounded-full shadow-[0px_0px_10px_rgb(0,0,0)]"
                    />
                  )}
                  <div className="flex flex-col grow mx-3 mt-2">
                    <h2 className="font-dinnext text-xl uppercase font-bold text-color-white">
                      {activeSkill.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      {activeSkill.ability_tag.map((tag, index) => (
                        <div
                          key={index}
                          style={{ backgroundColor: `rgb(${tag.rgb})` }}
                          className="font-dinnext text-xs px-2.5 text-color-white"
                        >
                          {tag.name}
                        </div>
                      ))}
                    </div>
                    {updateSkillDescription(
                      activeSkill.description,
                      activeSkill.special_terms
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full min-h-0 bg-[#030712] px-7 pt-4 pb-3">
                  {(activeSkill.ability_cooldown.length !== 0 ||
                    activeSkill.ability_cost.length !== 0) && (
                    <div className="flex justify-between flex-wrap pb-1 text-color-primary ">
                      {activeSkill.ability_cooldown.length !== 0 && (
                        <div className="flex items-center">
                          <div
                            style={{
                              backgroundImage: `url('/images/Cooldown.png')`,
                            }}
                            className="w-4 h-4 bg-cover bg-no-repeat"
                          />
                          {/* <p className="mx-1">Cooldown</p> */}
                          <div className="ml-1">
                            {activeSkill.ability_cooldown.map(
                              (value, index, array) => (
                                <Fragment key={index}>
                                  {`${value}${
                                    index < array.length - 1 ? " / " : ""
                                  }`}
                                </Fragment>
                              )
                            )}
                          </div>
                        </div>
                      )}
                      {activeSkill.ability_cost.length !== 0 && (
                        <div className="flex items-center">
                          <div
                            style={{
                              backgroundColor: `${ling.ability_resource_color}`,
                            }}
                            className="w-4 h-4 bg-cover bg-no-repeat"
                          />
                          {/* <p className="mx-1">Cost</p> */}
                          <div className="ml-1">
                            {activeSkill.ability_cost.map(
                              (value, index, array) => (
                                <Fragment key={index}>
                                  {`${value}${
                                    index < array.length - 1 ? " / " : ""
                                  }`}
                                </Fragment>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="w-full flex">
                    <div className="w-1/2 flex flex-col items-center">
                      <div className="w-full flex flex-col flex-wrap items-center">
                        {activeSkill.damage_type && (
                          <div className="w-full flex font-bold text-color-primary uppercase whitespace-nowrap ">
                            <p>Damage Type :</p>
                            <p className="text-color-accent ml-1">
                              {activeSkill.damage_type}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col pt-4">
                    {activeSkill.special_values.map((special_value, index) => (
                      <div
                        key={index}
                        className="h-6 flex font-bold text-sm text-color-primary uppercase"
                      >
                        {special_value.heading}
                        <p className="ml-1 text-color-accent font-semibold ">
                          {special_value.values_float.map(
                            (value_float, index, array) => (
                              <Fragment key={index}>
                                {special_value.is_percentage
                                  ? `${value_float}%${
                                      index < array.length - 1 ? " / " : ""
                                    }`
                                  : `${value_float}${
                                      index < array.length - 1 ? " / " : ""
                                    }`}
                              </Fragment>
                            )
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Dialog */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-color-dark/25 " />
          </Transition.Child>

          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-color-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-color-secondary"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-color-secondary">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-color-tertiary px-4 py-2 text-sm font-medium text-color-white hover:bg-color-accent focus:outline-none focus-visible:ring-0"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default Page;
