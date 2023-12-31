import { Hero } from "@/components/Home/Hero";
import { SucessStory } from "@/components/Home/SuccessStory";
import { Testimonials } from "@/components/Home/Testimonials";
import { Unlock } from "@/components/Home/Unlock";

export default function Home() {
  return (
    <main>
      <Hero />
      <Unlock />
      <SucessStory />
      <Testimonials />
    </main>
  );
}
