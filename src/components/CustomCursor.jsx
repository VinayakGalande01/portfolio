import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const lerp = (start, end, factor) => start + (end - start) * factor;
    let raf;

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, targetPos.current.x, 0.1);
      cursorPos.current.y = lerp(cursorPos.current.y, targetPos.current.y, 0.1);
      gsap.set(cursor, {
        x: cursorPos.current.x,
        y: cursorPos.current.y,
      });
      raf = requestAnimationFrame(animate);
    };
    animate();

    const handleHover = () => {
      const interactiveEls = document.querySelectorAll("a, button, [data-hover]");
      const onEnter = () => cursor.classList.add("hovering");
      const onLeave = () => cursor.classList.remove("hovering");

      interactiveEls.forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });

      return () => {
        interactiveEls.forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
        });
      };
    };

    // Initial attachment
    const cleanupHover = handleHover();

    // Re-attach on DOM changes (e.g. page transitions)
    const observer = new MutationObserver(handleHover);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      cleanupHover();
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}
