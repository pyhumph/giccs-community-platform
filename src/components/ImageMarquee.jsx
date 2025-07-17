import { useEffect, useRef } from "react";
import img01 from "../assets/image03.jpg";
import img02 from "../assets/image04.jpg";
import img03 from "../assets/image05.jpg";
import img04 from "../assets/image06.jpg";
import img05 from "../assets/image07.jpg";
import img06 from "../assets/image09.jpg";
import img07 from "../assets/image10.jpg";

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
