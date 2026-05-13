import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', backgroundColor: 'var(--background)' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', color: '#111' }}>Get in Touch</h1>
          <p style={{ color: '#4b5563', fontSize: '1.25rem' }}>Call us at 0333 051 0634 or email contact@theaiautomationagency.ai</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
