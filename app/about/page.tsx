import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div style={{ paddingTop: '100px' }}>
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}
