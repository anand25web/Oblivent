import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-electric-violet via-sky-blue to-neon-lime z-50 transition-all duration-300"
      style={{ width: `${scrollProgress}%` }}
      data-testid="scroll-progress"
    />
  );
}
