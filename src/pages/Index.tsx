import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Locations from "@/components/Locations"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
