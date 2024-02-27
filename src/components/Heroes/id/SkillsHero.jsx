"use client";

import classNames from "@/libs/classNames";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const SkillsHero = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(skills[0]);

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
    <>
      <div className="w-[55%] mr-5">
        <div className="relative w-full pt-[56%] h-0">
          <div className="absolute top-0 left-0 w-full h-full z-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-color-white"></div>
        </div>
        <div className="relative flex w-full justify-center flex-wrap -mt-10 z-20">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              style={{ backgroundImage: `url('${skill.icon}')` }}
              className={classNames(
                "relative w-20 h-20 mx-1 mb-2 cursor-pointer bg-cover bg-center bg-no-repeat rounded-full transition transform ease-in-out duration-100 hover:scale-110 shadow-[0px_0px_10px_rgb(0,0,0)]",
                `${
                  activeSkill.name === skill.name
                    ? "filter-none"
                    : "filter saturate-0 brightness-75"
                }`
              )}
              onClick={() => handleActiveSkill(skill)}
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
                {activeSkill.tags.map((tag) => (
                  <div
                    key={tag.id}
                    style={{ backgroundColor: `rgb(${tag.rgb})` }}
                    className="font-dinnext text-xs px-2.5 text-color-white"
                  >
                    {tag.name}
                  </div>
                ))}
              </div>
              {updateSkillDescription(
                activeSkill.description,
                activeSkill.specialTerms
              )}
            </div>
          </div>
          <div className="flex flex-col w-full min-h-0 bg-[#030712] px-7 pt-4 pb-3">
            {(activeSkill.skillCooldown.length !== 0 ||
              activeSkill.skillCosts.length !== 0) && (
              <div className="flex justify-between flex-wrap pb-1 text-color-primary ">
                {activeSkill.skillCooldown.length !== 0 && (
                  <div className="flex items-center">
                    <div
                      style={{
                        backgroundImage: `url('/images/Cooldown.png')`,
                      }}
                      className="w-4 h-4 bg-cover bg-no-repeat"
                    />
                    {/* <p className="mx-1">Cooldown</p> */}
                    <div className="ml-1">
                      {activeSkill.skillCooldown.map((data, index, array) => (
                        <Fragment key={index}>
                          {`${data.value}${index < array.length - 1 ? " / " : ""}`}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                )}
                {activeSkill.skillCosts.length !== 0 && (
                  <div className="flex items-center">
                    <div
                      // style={{
                      //   backgroundColor: `${ling.ability_resource_color}`,
                      // }}
                      className="w-4 h-4 bg-cover bg-no-repeat bg-color-primary"
                    />
                    {/* <p className="mx-1">Cost</p> */}
                    <div className="ml-1">
                      {activeSkill.skillCosts.map((data, index, array) => (
                        <Fragment key={index}>
                          {`${data.value}${index < array.length - 1 ? " / " : ""}`}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className="w-full flex">
              <div className="w-1/2 flex flex-col items-center">
                <div className="w-full flex flex-col flex-wrap items-center">
                  {activeSkill.damageType && (
                    <div className="w-full flex font-bold text-color-primary uppercase whitespace-nowrap ">
                      <p>Damage Type :</p>
                      <p className="text-color-accent ml-1">
                        {activeSkill.damageType}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col pt-4">
              {activeSkill.specialValue.map((value, index) => (
                <div
                  key={value.id}
                  className="h-6 flex font-bold text-sm text-color-primary uppercase"
                >
                  {value.heading}
                  <p className="ml-1 text-color-accent font-semibold ">
                    {value.valuesFloat.map((valueFloat, index, array) => (
                      <Fragment key={index}>
                        {value.is_percentage
                          ? `${valueFloat}%${
                              index < array.length - 1 ? " / " : ""
                            }`
                          : `${valueFloat}${
                              index < array.length - 1 ? " / " : ""
                            }`}
                      </Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsHero;
