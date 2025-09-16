import Hero from "@/components/Hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import Footer from "@/components/Footer";
import ChatbotEmbed from "@/components/ChatbotEmbed";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsCarousel />
      <Footer />
      <ChatbotEmbed />
    </div>
  );
};

export default Index;
