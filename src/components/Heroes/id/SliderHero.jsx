"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import CarouselSkinsHero from "./CarouselSkinsHero";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const SliderHero = ({ skins }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, skins.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="h-[39rem] w-full">
        <Image
          src={skins[0].splashArt}
          alt={skins[0].name}
          width={1280}
          height={720}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>
      <CarouselSkinsHero skins={skins} />
    </>
  );
};

export default SliderHero;
