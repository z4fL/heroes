"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import classNames from "@/libs/classNames";
import React, { useEffect, useRef, useState } from "react";

const CURSOR_SIZE = 80;
const START_INDEX = 0;
const DRAG_THRESHOLD = 50;
const FALLBACK_WIDTH = 132;

const CarouselSkinsHero = ({ skins }) => {
  const containerRef = useRef();
  const itemsRef = useRef([]);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const [isDragging, setIsDragging] = useState(false);
  const [hasEffectRun, setHasEffectRun] = useState(false);

  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < skins.length - 1;

  const containerWidth = 384;
  const activeSlideWidth = 173;
  const initialOffset =
    -(START_INDEX * activeSlideWidth) +
    (containerWidth - activeSlideWidth) / 2 -
    activeSlideWidth / 128;

  const offsetX = useMotionValue(initialOffset);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  function handleDragSnap(_, { offset: { x: dragOffset } }) {
    setIsDragging(false);
    containerRef.current?.removeAttribute("data-dragging");
    animatedX.stop();

    const currentOffset = offsetX.get();

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
        (dragOffset > 0 && dragOffset > offsetWidth + itemOffset && i > 1) ||
        (dragOffset < 0 &&
          dragOffset < offsetWidth + -itemOffset &&
          i < itemsRef.current.length - 2)
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= prevItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
      } else {
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    if (!canScrollPrev) return;

    const nextWidth =
      itemsRef.current[activeSlide - 1]?.offsetWidth || FALLBACK_WIDTH;
    offsetX.set(offsetX.get() + nextWidth);
    setActiveSlide((prev) => prev - 1);
  }

  function scrollNext() {
    if (!canScrollNext) return;

    const nextWidth =
      itemsRef.current[activeSlide + 1]?.offsetWidth || FALLBACK_WIDTH;
    offsetX.set(offsetX.get() - nextWidth);
    setActiveSlide((prev) => prev + 1);
  }

  return (
    <div className="absolute bottom-6 right-28 z-20 w-full max-w-sm pb-5">
      <div className="relative overflow-hidden">
        <motion.ul
          ref={containerRef}
          className="flex cursor-none items-center"
          style={{
            x: animatedX,
          }}
          drag="x"
          dragConstraints={{
            left: -(FALLBACK_WIDTH * (skins.length - 1)),
            right: FALLBACK_WIDTH,
          }}
          onDragStart={() => {
            containerRef.current?.setAttribute("data-dragging", true);
            setIsDragging(true);
          }}
          onDragEnd={handleDragSnap}
        >
          {skins.map((image, index) => {
            const active = index === activeSlide;

            return (
              <motion.li
                layout
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="group relative shrink-0 px-3 select-none transition-opacity duration-300"
                style={{
                  flexBasis: active ? "45%" : "40%",
                  // flexBasis: active ? "9rem" : "8rem",
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.4,
                }}
              >
                <Image
                  src={image.portrait}
                  width={390}
                  height={240}
                  alt={image.name}
                  quality={90}
                  priority={true}
                  className={classNames("h-full w-full object-contain")}
                />
              </motion.li>
            );
          })}
        </motion.ul>
        <button
          type="button"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className={classNames(
            "group absolute left-0 top-1/3 z-20",
            "grid aspect-square place-content-center rounded-full transition-colors"
          )}
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
          }}
        >
          <ChevronLeftIcon
            className={classNames(
              "h-10 w-10 stroke-[1.5]",
              "transition-colors group-enabled:group-hover:text-color-white group-disabled:opacity-50"
            )}
          />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className={classNames(
            "group absolute right-0 top-1/3 z-20",
            "grid aspect-square place-content-center rounded-full transition-colors"
          )}
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
          }}
        >
          <ChevronRightIcon
            className={classNames(
              "h-10 w-10 stroke-[1.5]",
              "transition-colors group-enabled:group-hover:text-color-white group-disabled:opacity-50"
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default CarouselSkinsHero;
