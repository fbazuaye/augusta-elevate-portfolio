import { Button } from "@/components/ui/button";
import profileImage from "@/assets/dr-augusta-real-photo.png";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <img
            src={profileImage}
            alt="Dr. Augusta IMOMON, MD - Professional Portrait"
            className="profile-image w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Dr. Augusta IMOMON, MD
        </h1>

        {/* Bio Tagline */}
        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
          Advancing Global Education Access™ | <span className="text-gold">800+ Students Guided</span> | 
          Higher Education Consultant & International Student Mentor | 
          <span className="text-turquoise">Africa Development</span> | 
          <span className="text-pink">MSc Smart EdTech</span>
        </p>

        {/* Call to Action Button */}
        <button
          onClick={scrollToProjects}
          className="btn-hero text-lg sm:text-xl inline-flex items-center gap-2"
          aria-label="View Dr. Augusta IMOMON's work and projects"
        >
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;