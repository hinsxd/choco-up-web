"use client";
import { Container } from "@/components/Container";
import FacebookIcon from "@/components/icons/facebook.svg";
import LinkedinIcon from "@/components/icons/linkedin.svg";
import LogoWhiteIcon from "@/components/icons/logo_white.svg";

type FooterItems = {
  title: string;
  items: string[];
};

/**
 * Company
 * - About us
 * - Contact
 * - Press
 * - Careers
 * Resources
 * - Blog
 * - Founder Perks
 * Success stories
 * - BuyHive
 * - Jaco
 * - Soundbrenner
 * Support
 * - Contact us
 * - FAQ
 * Legal
 * - Privacy policy
 * - Terms of service
 * ** Thank you Copilot! **
 */
const footerItems: FooterItems[] = [
  {
    title: "Company",
    items: ["About us", "Contact", "Press", "Careers"],
  },
  {
    title: "Resources",
    items: ["Blog", "Founder Perks"],
  },
  {
    title: "Success stories",
    items: ["BuyHive", "Jaco", "Soundbrenner"],
  },
  {
    title: "Support",
    items: ["Contact us", "FAQ"],
  },
  {
    title: "Legal",
    items: ["Privacy policy", "Terms of service"],
  },
];

export const Footer = () => {
  return (
    <Container className="bg-chocoup-midnight-blue py-12">
      <footer className="flex flex-col gap-6 lg:flex-row lg:gap-12">
        {/* Info section */}
        <div className="flex flex-col gap-4">
          <LogoWhiteIcon />
          <div className="text-white">
            Asia&apos;s largest revenue based financing platform
          </div>
          <div className="flex gap-3">
            <FacebookIcon />
            <LinkedinIcon />
          </div>
        </div>
        {/* Items */}
        <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-3">
          {footerItems.map((item) => (
            <div key={item.title}>
              <div className="text-chocoup-blue mb-4 font-bold">
                {item.title}
              </div>
              {item.items.map((item) => (
                <div key={item} className="mb-2 text-white">
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Divider */}
      </footer>
      <div className="mt-6 w-full border-t border-white" />
      {/* Bottom */}
      <div className="mt-6 w-full text-center text-sm text-white">
        © Copyright 2023 Choco Up. All rights reserved.
      </div>
    </Container>
  );
};
