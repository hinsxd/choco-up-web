"use client";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import ArrowUpIcon from "@/components/icons/arrow-up.svg";
import MenuIcon from "@/components/icons/menu.svg";
import { NavItem, navItems } from "@/components/Navbar/navItems";
import { useClickAway } from "@/hooks/useClickAway";

export const MobileMenu = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    setShow(false);
  });

  return (
    <div
      ref={ref}
      id="mobile-nav"
      className="relative ml-auto flex items-center md:hidden"
    >
      <button
        type="button"
        className={twMerge("p-4 text-black", show && "bg-gray-300 text-white")}
        onClick={() => setShow(!show)}
      >
        <MenuIcon className="fill-current" />
      </button>
      <div
        className={twMerge(
          "fixed left-0 right-0 top-full z-0 flex w-full transform flex-col bg-gray-300 transition-all duration-300 ease-in-out",
          show ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="py-3">
          {navItems.map((item) => (
            <MobileMenuItem item={item} key={item.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const MobileMenuItem = ({ item }: { item: NavItem }) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubItems = item.items && item.items.length > 0;

  const ref = useRef<HTMLLIElement>(null);
  useClickAway(ref, () => {
    setExpanded(false);
  });
  return (
    <li ref={ref} key={item.title} className="w-full">
      <div
        className={twMerge(
          "flex w-full justify-between px-4 py-3 font-medium",
          expanded && "bg-gray-600 text-white",
        )}
        onClick={() => {
          if (hasSubItems) setExpanded(!expanded);
        }}
      >
        <div>{item.title}</div>
        {hasSubItems && (
          <button type="button" className={twMerge(!expanded && "rotate-180")}>
            <ArrowUpIcon className="fill-current" />
          </button>
        )}
      </div>
      {expanded && (
        <ul className="py-3 pl-8">
          {item.items?.map((subItem) => (
            <li key={subItem.title} className="pb-3">
              <span>{subItem.title}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
