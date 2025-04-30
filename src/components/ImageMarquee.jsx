import { useEffect, useRef } from "react";
import img01 from "../assets/r.png";
import img02 from "../assets/seven.png";

export default function ImageMarquee() {
  const marqueeRef = useRef(null);

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
      src: img01,
      alt: "Children playing together",
    },
    {
      id: 4,
      src: img02,
      alt: "Smiling child",
    },
    {
      id: 5,
      src: img01,
      alt: "Children receiving gifts",
    },
    {
      id: 6,
      src: img02,
      alt: "Community support",
    },
    {
      id: 7,
      src: img02,
      alt: "Community support",
    },
  ];

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      position -= 0.5; // Adjust speed here

      // Reset position when first image is out of view
      if (position <= -200) {
        position = 0;
      }

      if (marqueeElement) {
        marqueeElement.style.transform = `translateX(${position}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Create a duplicate set of images for seamless scrolling
  const allImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden bg-gray-600 py-4 relative">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {allImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="inline-block w-64 h-40 mx-2 flex-shrink-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
