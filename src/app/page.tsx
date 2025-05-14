import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex text-red-800 flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Header />
          <Hero />
          <About />
          <Service />
          <Project />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
