"use client";

import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { Fragment, useContext, useState } from "react";
import { SkinContext } from "./TopSectionHero";

const DisclosureHero = ({ data }) => {
  const { currentSkin } = useContext(SkinContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <div className="absolute bottom-6 left-28 z-30 w-full max-w-lg bg-color-white pt-5 pb-7 px-6">
            <Disclosure.Button className="absolute -top-10 left-0 flex bg-color-white px-4 py-2 text-left text-sm font-medium text-color-tertiary hover:bg-color-primary focus:outline-none focus-visible:ring-0">
              <span>{open ? "Minimize" : "Maximize"}</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } ml-3 h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <div className="flex justify-between items-center pb-3">
              <div className="flex grow">
                <div className="relative flex flex-col font-tungsten uppercase">
                  <h3 className="text-color-dark text-5xl z-20 -mb-5">
                    {data.heroName}
                  </h3>
                  <h2 className="flex items-center text-color-accent text-6xl z-10">
                    {data.skin.at(currentSkin)["name"]}
                    {data.skin.at(currentSkin)["skinTagIcon"] && (
                      <div className="flex items-center w-auto h-7 ml-3">
                        <Image
                          src={data.skin.at(currentSkin)["skinTagIcon"]}
                          alt="Dragon Tamer"
                          width={87}
                          height={36}
                          className="w-auto h-full max-h-8"
                        />
                      </div>
                    )}
                  </h2>
                </div>
              </div>
              <div className="flex items-center divide-x divide-color-secondary/40">
                <div className="flex items-center space-x-1 w-full pr-2.5">
                  {data.roles.map((role, index) => (
                    <div
                      key={role.id}
                      className="flex flex-col justify-center items-center has-tooltip"
                    >
                      <Image
                        src={role.icon}
                        alt={role.name}
                        width={320}
                        height={320}
                        className={`max-w-10 max-h-10 ${
                          index === 1 ? "invert-[.30]" : "invert-[.50]"
                        }`}
                      />
                      <span className="tooltip bg-color-dark text-color-white text-xs -mt-20 p-2">
                        {role.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-1 w-full pl-2.5">
                  {data.positions.map((position, index) => (
                    <div
                      key={position.id}
                      className="flex flex-col justify-center items-center has-tooltip"
                    >
                      <Image
                        src={position.icon}
                        alt={position.name}
                        width={320}
                        height={320}
                        className={`max-w-10 max-h-10 ${
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
              <Disclosure.Panel className="">
                <div className="flex justify-start items-center py-3 border-t border-color-secondary/40">
                  <p className="font-dinnext font-bold whitespace-nowrap inline">
                    Specialities :{" "}
                  </p>
                  <span className="font-dinnext font-bold inline whitespace-nowrap">
                    {data.specialities.join(" / ")}
                  </span>
                </div>
                <div className="w-full flex flex-wrap items-center justify-between py-3 border-y border-color-secondary/40">
                  {data.ratings.map((rating, index) => (
                    <div
                      key={rating.id}
                      className="w-2/5 h-8 min-h-0 flex flex-col my-1 mr-3"
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
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="h-full flex items-center bg-color-dark px-4 py-2.5 text-sm font-medium text-color-white hover:bg-color-accent focus:outline-none focus-visible:ring-0"
                  >
                    More Details
                    <ChevronRightIcon className="w-4 h-4 font-bold" />
                  </button>
                </div>
              </Disclosure.Panel>
            </Transition>
            <div className="absolute bottom-0 left-0 w-full h-6 bg-color-tertiary"></div>
          </div>
        )}
      </Disclosure>
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
    </>
  );
};

export default DisclosureHero;
