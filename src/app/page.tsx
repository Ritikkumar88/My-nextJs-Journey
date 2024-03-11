import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSetion from "@/components/HeroSetion";
import WhyChoseUs from "../components/WhyChoseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebnars from "@/components/UpcomingWebnars";
import Instructors from "../components/Instructors";
import Footer from "@/components/Footer";


export default function Home() {
  return (
        <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
              <HeroSetion/>
              <FeaturedCourses/>
              <WhyChoseUs/>
              <TestimonialCards/>
              <UpcomingWebnars/>
              <Instructors/>
              <Footer/>
        </main>
  );
}
