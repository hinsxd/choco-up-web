import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden pb-32 pt-28 lg:h-screen lg:pt-32">
      <Container className="flex h-full flex-col justify-center">
        <h2 className="mb-6 font-bold">Choco Up</h2>
        <div className="mb-6 w-2/3 font-medium lg:w-1/2">
          Helping businesses and e-commerce brands grow by providing easy access
          to working capital that&apos;s flexible and non-dilutive.
        </div>

        <div className="mb-12 font-medium">
          Say hello to revenue-based financing.
        </div>
        <Button variant="gradient">Get Funded</Button>
      </Container>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero.svg"
        alt="Hero"
        className="absolute -right-[10%] top-1/2 mt-10 hidden w-2/3 -translate-y-1/2 lg:block"
      />
    </div>
  );
};
