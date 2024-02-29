import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSetion from "@/components/HeroSetion";
import WhyChoseUs from "../components/WhyChoseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebnars from "@/components/UpcomingWebnars";


export default function Home() {
  return (
        <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
              <HeroSetion/>
              <FeaturedCourses/>
              <WhyChoseUs/>
              <TestimonialCards/>
              <UpcomingWebnars/>
        </main>
  );
}
