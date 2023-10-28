import Image from "next/image";

import { Container } from "@/components/Container";

import bulletImage from "./bullet.png";
import unlockImg from "./unlock.webp";

const items = [
  "Purchase inventory",
  "No collateral needed",
  "Invest in ads and marketing",
  "Simple, one-time flat fee",
  "Expand into new markets",
  "Use the funds the way you want",
];

export const Unlock = () => {
  return (
    <Container className="py-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-center">
          Unlock{" "}
          <span className="text-chocoup-medium-slate-blue">
            Business Growth
          </span>
        </h2>
        <div className="text-center text-sm font-medium md:text-base">
          Manage your cash flow and reach business milestones with accessible
          growth capital. It&apos;s e-commerce funding that&apos;s fast,
          flexible and founder-friendly.
        </div>

        <Image
          src={unlockImg}
          className="mx-auto"
          loading="lazy"
          placeholder="blur"
          alt="Unlock Business Growth"
        />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-4">
              <Image src={bulletImage} alt="" />
              <div className="text-base font-medium md:text-lg">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
