"use client";
import Image from "next/image";
import { clients } from "~/lib/constants";

export default function LogoCarousel() {
  return (
    <div className="scroller relative max-w-7xl mx-auto z-20 overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_20%,transparent_100%)]">
      <ul
        className="flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap
          animate-scroll hover:[animation-play-state:paused]"
      >
        {clients.map((cl) => (
          <Image
            width={170}
            height={1}
            src={cl.href}
            alt={cl.href}
            className=" relative rounded-2xl  object-contain opacity-50"
            key={cl.href}
          />
        ))}
      </ul>
    </div>
  );
}
