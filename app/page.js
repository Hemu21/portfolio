"use client";
import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex w-full flex-col bg-[#121212]  ">
      <Navbar />
      <div className="container m-auto w-full mt-24">
        
        <HeaderSection />
        <AboutSection />
        <Skills />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
