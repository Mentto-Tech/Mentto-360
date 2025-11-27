import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import NotRecommended from "@/components/NotRecommended";
import Roadmap from "@/components/Roadmap";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <NotRecommended />
        <Roadmap />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
