import { useEffect, useRef } from "react";

export default function UAVBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomPosition = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const x = Math.random() * (vw - 80) + 40;
      const y = Math.random() * (vh - 80) + 40;
      return { x, y };
    };

    const moveUAV = (uav: HTMLElement) => {
      const { x: newX, y: newY } = randomPosition();

      // Apply the new position with smoother transition
      uav.style.transform = `translate(${newX}px, ${newY}px)`;

      // Randomize speed for more organic movement
      const duration = Math.random() * 3 + 4; // Between 4s and 7s
      uav.style.transition = `transform ${duration}s ease-in-out`;

      // Schedule the next movement
      setTimeout(() => moveUAV(uav), duration * 1000);
    };

    // Initialize UAV animations with staggered start times
    const uavs = backgroundRef.current?.querySelectorAll(".stochastic_uav") as NodeListOf<HTMLElement>;
    if (uavs) {
      uavs.forEach((uav, index) => {
        // Stagger the initial animation start
        setTimeout(() => {
          moveUAV(uav);
        }, index * 2000);
      });
    }
  }, []);

  return (
    <div id="background" ref={backgroundRef}>
      <svg
        className="stochastic_uav"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L22 9L20 11L12 8L4 11L2 9L12 2Z"
          fill="currentColor"
          className="text-primary opacity-60"
        />
        <path
          d="M12 8L20 11V13L12 10L4 13V11L12 8Z"
          fill="currentColor"
          className="text-accent opacity-40"
        />
        <circle cx="12" cy="10" r="1" fill="currentColor" className="text-accent" />
      </svg>
      <svg
        className="stochastic_uav"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L22 9L20 11L12 8L4 11L2 9L12 2Z"
          fill="currentColor"
          className="text-primary opacity-60"
        />
        <path
          d="M12 8L20 11V13L12 10L4 13V11L12 8Z"
          fill="currentColor"
          className="text-accent opacity-40"
        />
        <circle cx="12" cy="10" r="1" fill="currentColor" className="text-accent" />
      </svg>
    </div>
  );
}
