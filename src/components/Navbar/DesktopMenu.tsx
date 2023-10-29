import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/Button";
import { navItems, type NavItem } from "@/components/Navbar/navItems";
import { useClickAway } from "@/hooks/useClickAway";

export const DesktopMenu = () => {
  return (
    <nav className="ml-auto hidden md:block">
      <ul className="flex items-center gap-3 pl-4 lg:gap-4">
        {navItems.map((item) => (
          <DesktopMenuItem item={item} key={item.title} />
        ))}
        <li>
          <Button size="medium" responsive>
            Get Funded
          </Button>
        </li>
      </ul>
    </nav>
  );
};

const DesktopMenuItem = ({ item }: { item: NavItem }) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubItems = item.items && item.items.length > 0;
  const ref = useRef<HTMLLIElement>(null);
  useClickAway(ref, () => {
    setExpanded(false);
  });
  return (
    <li className="relative" ref={ref}>
      <div
        className="flex items-center gap-2 p-1 text-center text-sm font-medium lg:p-2 lg:text-lg"
        onClick={() => {
          if (hasSubItems) setExpanded(!expanded);
        }}
      >
        {item.title}
        {hasSubItems && (
          <ChevronDownIcon
            className={twMerge("h-4 w-4", expanded && "rotate-180")}
          />
        )}
      </div>
      {expanded && (
        <div className="absolute right-0 top-3/4 rounded-md border border-gray-200 bg-white p-2 shadow-xl">
          {item.items?.map((subItem) => (
            <div className="whitespace-nowrap p-2 text-sm" key={subItem.title}>
              {subItem.title}
            </div>
          ))}
        </div>
      )}
    </li>
  );
};
