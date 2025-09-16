import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  color: 'pink' | 'turquoise' | 'gold';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Global Education Access Initiative",
    description: "Leading comprehensive programs to increase higher education accessibility across African nations, partnering with international universities.",
    color: 'pink'
  },
  {
    id: 2,
    title: "Smart EdTech Innovation",
    description: "Developing cutting-edge educational technology solutions to bridge digital learning gaps in underserved communities.",
    color: 'turquoise'
  },
  {
    id: 3,
    title: "International Student Mentorship Program",
    description: "Personalized guidance system that has successfully supported 800+ students in achieving their international education goals.",
    color: 'gold'
  },
  {
    id: 4,
    title: "Africa Development Consulting",
    description: "Strategic advisory services focused on sustainable educational infrastructure development across the African continent.",
    color: 'pink'
  },
  {
    id: 5,
    title: "Medical Education Reform",
    description: "Pioneering modern approaches to medical education delivery and accessibility in developing healthcare systems.",
    color: 'turquoise'
  },
  {
    id: 6,
    title: "Cross-Cultural Learning Solutions",
    description: "Creating innovative frameworks for culturally responsive education that respects diverse learning traditions.",
    color: 'gold'
  }
];

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 3;
  const maxIndex = Math.max(0, projects.length - projectsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
            Discover the impactful work driving educational transformation and global accessibility
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-12">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className={`project-card project-card-${project.color} group cursor-pointer`}
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;