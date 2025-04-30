import { useState, useEffect, useRef } from "react";

const NumberCounter = ({ targetNumber, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const animationRef = useRef(null);

  // Set up intersection observer to detect when counter is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      },
    );

    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Clean up observer on unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Start animation when element becomes visible
  useEffect(() => {
    // Only start animation if element is visible and hasn't animated before
    if (isVisible && !hasAnimated) {
      startAnimation();
      setHasAnimated(true);
    }

    // Clean up animation if component unmounts or becomes invisible
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]); // Only re-run when visibility changes

  const startAnimation = () => {
    // Make sure we have a valid number to count to
    if (isNaN(targetNumber)) {
      console.error("targetNumber must be a valid number");
      return;
    }

    // Convert to number explicitly to handle string inputs
    const target = Number(targetNumber);

    // Calculate the increment per interval
    const totalFrames = Math.min(duration / 16, 100); // ~60fps, max 100 frames
    const incrementPerFrame = target / totalFrames;

    let currentCount = 0;
    let frame = 0;

    // Use requestAnimationFrame for smoother animation
    const animate = () => {
      currentCount = Math.min(currentCount + incrementPerFrame, target);
      setCount(Math.floor(currentCount));

      frame++;

      if (frame < totalFrames) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we end at exactly the target number
        setCount(target);
      }
    };

    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
  };

  // Format the number with commas
  const formattedNumber = count.toLocaleString();

  return (
    <div
      ref={counterRef}
      className="text-4xl sm:text-5xl md:text-[6rem] font-bold text-black leading-none"
    >
      {formattedNumber}
      {suffix}
    </div>
  );
};

export default NumberCounter;
