"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import React from "react";

const navigation = [
  { name: "Homepage", href: "/" },
  { name: "All Heroes", href: "/all-heroes" },
  { name: "Equipment", href: "/equipment" },
  { name: "Gallery List", href: "/squads/oriental-fighter" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const pathName = usePathname();
  return (
    <Disclosure as="nav" className="fixed top-0 bg-color-dark w-full z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-color-white hover:bg-color-dark hover:text-color-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-color-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Desktop menu */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src="/logo.svg" alt="logo" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathName == item.href
                            ? "bg-color-accent text-color-white"
                            : "text-color-white hover:bg-color-tertiary hover:text-color-white",
                          "block rounded-md px-3 py-2 text-lg font-dinnext font-medium"
                        )}
                        aria-current={
                          pathName == item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathName == item.href
                      ? "bg-color-accent text-color-white"
                      : "text-color-white hover:bg-color-tertiary hover:text-color-white",
                    "block rounded-md px-3 py-2 text-lg font-dinnext font-medium"
                  )}
                  aria-current={pathName == item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
