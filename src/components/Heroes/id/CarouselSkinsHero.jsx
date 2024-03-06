"use client";

import classNames from "@/libs/classNames";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { SkinContext } from "./TopSectionHero";

const CURSOR_SIZE = 40;
const START_INDEX = 0;
const DRAG_THRESHOLD = 45;
const FALLBACK_WIDTH = 132;

export default function CarouselSkinsHero({ skins }) {
  const { setCurrentSkin } = useContext(SkinContext);

  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < skins.length - 1;

  const initialOffset = 320 / 2 - FALLBACK_WIDTH / 2;
  const offsetX = useMotionValue(initialOffset);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  const [isDragging, setIsDragging] = useState(false);
  function handleDrag(_, { offset: { x: dragOffset } }) {
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");

    animatedX.stop();

    const currentOffset = offsetX.get();
    console.log("dragOffset", dragOffset, "currentOffset", currentOffset);

    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && // dragging left
          dragOffset > offsetWidth + itemOffset &&
          i > 1) ||
        (dragOffset < 0 && // dragging right
          dragOffset < offsetWidth + -itemOffset &&
          i < itemsRef.current.length - 2)
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        // prev
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
        setCurrentSkin(i - 1);
      } else if (dragOffset < 0) {
        // next
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
        setCurrentSkin(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth);
    setActiveSlide((prev) => prev - 1);
    setCurrentSkin((prev) => prev - 1);
  }

  function scrollNext() {
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth);
    setActiveSlide((prev) => prev + 1);
    setCurrentSkin((prev) => prev + 1);
  }

  return (
    <div
      className={classNames(
        "absolute bottom-11 right-28 z-20 w-full max-w-xs mb-5"
      )}
    >
      <div
        className={classNames(
          "relative h-52 flex items-center overflow-hidden"
        )}
      >
        <motion.ul
          ref={containerRef}
          className="flex items-center cursor-grab"
          style={{
            x: animatedX,
          }}
          drag="x"
          dragConstraints={{
            right: 320 / 2 - FALLBACK_WIDTH / 2,
            left:
              -((skins.length - 1) * FALLBACK_WIDTH + (skins.length - 1) * 12) +
              100,
          }}
          onDragStart={() => {
            containerRef.current?.setAttribute("data-dragging", "true");
            setIsDragging(true);
          }}
          onDragEnd={handleDrag}
        >
          {skins.map((skin, idx) => {
            const active = idx === activeSlide;
            return (
              <motion.li
                layout
                key={skin.id}
                ref={(el) => (itemsRef.current[idx] = el)}
                className="relative shrink-0 px-1.5"
              >
                <Image
                  key={skin.name}
                  src={skin.portrait}
                  width={240}
                  height={390}
                  alt={skin.name}
                  quality={90}
                  className="h-full w-[120px] object-cover transition-transform"
                  style={{
                    transform: `scale(${active ? 1 : 0.9})`,
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                  }}
                />
              </motion.li>
            );
          })}
        </motion.ul>
        <button
          className="group absolute left-0 z-20 cursor-pointer focus:outline-none"
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
          }}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeftIcon className="w-8 h-8 text-color-white group-enabled:group-hover:text-color-accent group-disabled:opacity-50" />
        </button>
        <button
          className="group absolute right-0 z-20 cursor-pointer focus:outline-none"
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
          }}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRightIcon className="w-8 h-8 text-color-white group-enabled:group-hover:text-color-accent group-disabled:opacity-50" />
        </button>
      </div>
    </div>
  );
}
