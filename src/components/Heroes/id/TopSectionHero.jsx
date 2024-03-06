"use client";

import React, { createContext, useState } from "react";
import SliderHero from "./SliderHero";
import DisclosureHero from "./DisclosureHero";
import CarouselSkinsHero from "./CarouselSkinsHero";

export const SkinContext = createContext();

const TopSectionHero = ({ data }) => {
  const [currentSkin, setCurrentSkin] = useState(0);

  return (
    <div className="relative w-full h-[39rem] overflow-hidden">
      <SkinContext.Provider
        value={{
          currentSkin,
          setCurrentSkin,
        }}
      >
        <SliderHero skins={data.skins} />
        <CarouselSkinsHero skins={data.skins} />
        <DisclosureHero
          data={{
            skin: data.skins.map((skin) => {
              return {
                name: skin.name,
                skinTagIcon: skin.skinTagIcon,
              };
            }),
            heroName: data.name,
            roles: data.roles,
            positions: data.positions,
            specialities: data.specialities.map(
              (speciality) => speciality.name
            ),
            ratings: data.ratings,
            skillsResource: {
              name: data.skillsResources,
              color: data.skillsResourcesColor,
              alterName: data.skillsResourcesAlternateNames,
            },
          }}
        />
      </SkinContext.Provider>
    </div>
  );
};

export default TopSectionHero;
