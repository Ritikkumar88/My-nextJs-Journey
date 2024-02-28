import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSetion from "@/components/HeroSetion";
import WhyChoseUs from "@/components/whyChoseUs";


export default function Home() {
  return (
        <main className="min-h-screen bg-black antialiased bg-grid-white/[0.02]">
              <HeroSetion/>
              <FeaturedCourses/>
              <WhyChoseUs/>
        </main>
  );
}
