import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // We already have translate(-50%, -50%) in index.css, but GSAP uses x/y.
    // Instead of xPercent/yPercent, since index.css sets top:0 left:0 and transform translate(-50%, -50%),
    // we just animate the x and y coordinates.
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        duration: 0.15,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"]');
      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"]');
      if (isInteractive) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "hovering" : ""}`}
    />
  );
}
