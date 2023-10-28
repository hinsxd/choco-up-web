"use client";

import { Container } from "@/components/Container";
import LogoIcon from "@/components/icons/logo.svg";
import { MobileMenu } from "@/components/Navbar/MobileMenu";

export const Navbar = () => {
  return (
    <Container className="fixed left-0 right-0 top-0 backdrop-blur-sm">
      <nav className="flex items-center py-2">
        <LogoIcon />
        {/* Mobile menu */}
        <div className="md:hidden"></div>
        {/* Desktop menu */}
        <MobileMenu />
      </nav>
    </Container>
  );
};
