import { Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import React from "react";

const SliderHero = ({ skins }) => {

  return (
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
  );
};

export default SliderHero;
