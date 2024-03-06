"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { SkinContext } from "./TopSectionHero";

const SliderHero = ({ skins }) => {
  const { currentSkin } = useContext(SkinContext);

  return (
    <>
      <div className="w-full">
        <div className="flex w-full h-full">
          {skins.map((skin, index) => {
            return (
              <div
                key={index}
                className={`relative shrink-0 w-full h-full ${
                  index === currentSkin ? "" : "hidden"
                }`}
              >
                <div className="overflow-hidden">
                  <Image
                    key={skin.id}
                    src={skin.splashArt}
                    alt={skin.name}
                    width={1280}
                    height={720}
                    className="w-full h-full object-cover object-top"
                    priority={true}
                    quality={50}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SliderHero;
