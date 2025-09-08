import { useEffect, useRef, useState } from "react";

export default function useInView(options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const io = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.unobserve(entry.target); // Only trigger once
      }
    }, options);
    
    io.observe(el);
    return () => io.disconnect();
  }, [options]);
  
  return [ref, inView];
}
