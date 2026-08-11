import { useEffect } from 'react';

/**
 * Custom hook to apply a premium 3D tilt effect on elements using React refs.
 * @param {React.RefObject} refRef - The React Ref of the target element.
 * @param {number} maxTilt - The maximum tilt angle in degrees (default: 10).
 */
export default function use3DTilt(refRef, maxTilt = 10) {
  useEffect(() => {
    const el = refRef.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      
      // Calculate coordinates relative to the card's center (range -1 to 1)
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      
      const xPercent = mouseX / (width / 2);
      const yPercent = mouseY / (height / 2);
      
      // Calculate tilt degrees
      const tiltX = -(yPercent * maxTilt).toFixed(2);
      const tiltY = (xPercent * maxTilt).toFixed(2);
      
      // Apply style transforms with perspective
      el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.15s ease-out';
    };

    // Attach listeners
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [refRef, maxTilt]);
}
