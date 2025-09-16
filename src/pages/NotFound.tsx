import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="hero-gradient min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <p className="mb-8 text-xl text-white/80">Oops! Page not found</p>
        <a 
          href="/" 
          className="btn-hero text-lg inline-flex items-center gap-2"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
