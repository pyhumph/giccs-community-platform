import React from "react";

const SectionWrapper = ({
  children,
  className = "",
  id = "",
  backgroundColor = "bg-white",
  bgColorHex = null,
}) => {
  const style = bgColorHex ? { backgroundColor: bgColorHex } : {};

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgColorHex ? "" : backgroundColor} ${className}`}
      style={style}
    >
      <div className="mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
