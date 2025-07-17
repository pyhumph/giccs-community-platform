import { useState, useEffect, useRef } from "react";
import img01 from "../../assets/image03.jpg";
import img02 from "../../assets/image04.jpg";
import img03 from "../../assets/image05.jpg";
import img04 from "../../assets/image06.jpg";
import img05 from "../../assets/image07.jpg";
import img06 from "../../assets/image09.jpg";
import img07 from "../../assets/image10.jpg";

export default function ImageMarquee() {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    {
      id: 1,
      src: img01,
      alt: "Young girl in basket",
    },
    {
      id: 2,
      src: img02,
      alt: "Mother with baby in colorful clothing",
    },
    {
      id: 3,
      src: img03,
      alt: "Children playing together",
    },
    {
      id: 4,
      src: img04,
      alt: "Smiling child",
    },
    {
      id: 5,
      src: img05,
      alt: "Children receiving gifts",
    },
    {
      id: 6,
      src: img06,
      alt: "Community support",
    },
    {
      id: 7,
      src: img07,
      alt: "Community support",
    },
  ];
  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    let animationId;
    let position = 0;
    let lastTimestamp = 0;
    const pixelsPerSecond = 50; // Speed control - pixels per second

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused) {
        // Calculate movement based on time elapsed for smooth animation
        const pixelsToMove = (pixelsPerSecond * deltaTime) / 1000;
        position -= pixelsToMove;

        // Get width of first image + its container
        const firstImageContainer = marqueeElement.firstChild;
        const containerWidth = firstImageContainer
          ? firstImageContainer.offsetWidth
          : 200;

        // Reset position when first image is out of view
        if (position <= -containerWidth) {
          // Move the first image to the end for infinite scroll effect
          const firstChild = marqueeElement.firstChild;
          marqueeElement.appendChild(firstChild);
          position += containerWidth;
        }

        if (marqueeElement) {
          marqueeElement.style.transform = `translateX(${position}px)`;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  // Create a duplicate set of images for seamless scrolling
  const allImages = [...images, ...images, ...images]; // Triple images for smooth loop

  return (
    <div
      className="w-full overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{
          willChange: "transform",
          transition: isPaused ? "transform 0.5s" : "none",
        }}
      >
        {allImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="inline-block w-96 h-80 flex-shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
