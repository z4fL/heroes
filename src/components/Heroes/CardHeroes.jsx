import classNames from "@/libs/classNames";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardHeroes = ({ heroes }) => {
  return (
    <div className="mt-4 sm:mt-9 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      <AnimatePresence>
        {heroes.map((data) => (
          <motion.div
            key={data.main_id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/heroes/${data.main_id}`}
              className={classNames(
                "block relative h-48 sm:h-72 overflow-hidden group",
                "transition ease-out duration-300",
                "hover:transform hover:scale-[1.05] sm:hover:scale-[1.15] hover:z-20 "
              )}
            >
              <Image
                src={data.skin_portrait}
                width={240}
                height={390}
                alt={data.name}
                quality={90}
                priority={true}
                className={classNames(
                  "h-full max-h-48 sm:max-h-72 w-full object-top object-cover",
                  "transform scale-[1.02]"
                )}
              />
              <div className="absolute left-0 -bottom-9 group-hover:bottom-0 z-10 w-full h-12 flex items-center transition-[opacity,_bottom] ease-out duration-300 opacity-0 group-hover:opacity-100 ">
                <p className="ml-3 text-base sm:text-2xl text-color-white">
                  {data.name}
                </p>
              </div>
              <div className="absolute left-0 bottom-0 right-0 w-full h-full pointer-events-none transition-[opacity,_bottom] ease-out duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute w-full h-full bg-gradient-to-t from-color-dark/90 from-10% via-color-secondary/5 via-30% " />
              </div>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardHeroes;
