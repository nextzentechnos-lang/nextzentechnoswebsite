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
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPercent = (mouseX - width / 2) / (width / 2);
      const yPercent = (mouseY - height / 2) / (height / 2);
      
      // Calculate tilt degrees
      const tiltX = -(yPercent * maxTilt).toFixed(2);
      const tiltY = (xPercent * maxTilt).toFixed(2);
      
      // Set CSS custom variables for dynamic 3D glare effect
      el.style.setProperty('--mouse-x', `${mouseX}px`);
      el.style.setProperty('--mouse-y', `${mouseY}px`);
      
      // Dynamic 3D shadow displacement based on tilt orientation
      const shadowX = -(xPercent * 15).toFixed(1);
      const shadowY = (yPercent * 20 + 20).toFixed(1);
      
      // Apply style transforms with high depth perspective
      el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(12px) scale3d(1.025, 1.025, 1.025)`;
      el.style.boxShadow = `${shadowX}px ${shadowY}px 35px rgba(255, 122, 0, 0.18), 0 20px 40px rgba(0, 0, 0, 0.7)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
      el.style.boxShadow = 'var(--glass-shadow)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.15s ease-out, box-shadow 0.15s ease';
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
