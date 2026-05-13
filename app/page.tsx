import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LatestPosts, FinalCTA } from "@/components/HomepageExtras";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Team 
        title="The Expert team By Your Side" 
        subtitle="Our philosophy is simple — Give our clients access to the best current automation systems in each industry." 
      />
      <LatestPosts />
      <FinalCTA />
      <Footer />
    </main>
  );
}
