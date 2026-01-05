import { useEffect } from 'react';

export function useRevealOnScroll(deps = []) {
  useEffect(() => {
    document.documentElement.classList.add('js-ready');
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, deps); // re-run when dependencies change (e.g., route change)
}
