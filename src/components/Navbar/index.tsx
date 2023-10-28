"use client";

import { Container } from "@/components/Container";
import LogoIcon from "@/components/icons/logo.svg";
import { DesktopMenu } from "@/components/Navbar/DesktopMenu";
import { MobileMenu } from "@/components/Navbar/MobileMenu";

export const Navbar = () => {
  return (
    <Container className="fixed left-0 right-0 top-0 z-[1000] backdrop-blur-xl">
      <nav className="flex h-16 items-center py-2">
        <LogoIcon className="w-20 flex-shrink-0 lg:w-24" />

        <DesktopMenu />

        <MobileMenu />
      </nav>
    </Container>
  );
};
