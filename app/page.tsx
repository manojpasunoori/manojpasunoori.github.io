import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import EventGallery from "@/components/EventGallery";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5 pb-4">
        <Hero />
        <Interests />
        <EventGallery />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
