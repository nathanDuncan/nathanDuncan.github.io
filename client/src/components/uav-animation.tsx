import { useEffect, useRef } from "react";

export default function UAVAnimation() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomPosition = () => {
      // Ensure we don't spawn off-screen
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const x = Math.random() * (vw - 40) + 20;
      const y = Math.random() * (vh - 40) + 20;
      return { x, y };
    };

    const moveUAV = (uav: HTMLElement) => {
      const { x: newX, y: newY } = randomPosition();

      // Apply the new position
      uav.style.transform = `translate(${newX}px, ${newY}px)`;

      // Randomize speed for organic movement
      const duration = Math.random() * 3 + 4; 
      uav.style.transition = `transform ${duration}s ease-in-out`;

      // Schedule the next movement
      setTimeout(() => moveUAV(uav), duration * 1000);
    };

    const uavs = backgroundRef.current?.querySelectorAll(".stochastic_uav") as NodeListOf<HTMLElement>;
    
    if (uavs) {
      uavs.forEach((uav, index) => {
        const { x, y } = randomPosition();
        uav.style.transform = `translate(${x}px, ${y}px)`;

        setTimeout(() => {
          moveUAV(uav);
        }, index * 2000);
      });
    }
  }, []);

  return (
    // CHANGE: z-50 puts it ON TOP of everything. 
    // pointer-events-none ensures clicks pass through to buttons below.
    <div id="uav-container" ref={backgroundRef} className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      
      {/* UAV 1 */}
      <img
        src="/assets/drone.png" 
        alt="Drone"
        className="stochastic_uav fixed w-16 h-16 object-contain"
        style={{ top: 0, left: 0, opacity: 1}}
      />

      {/* UAV 2 */}
      <img
        src="/assets/drone.png"
        alt="Drone"
        className="stochastic_uav fixed w-12 h-12 object-contain"
        style={{ top: 0, left: 0, opacity: 1}}
      />
      
      {/* UAV 3 */}
      <img
        src="/assets/drone.png"
        alt="Drone"
        className="stochastic_uav fixed w-14 h-14 object-contain"
        style={{ top: 0, left: 0, opacity: 1}}
      />
    </div>
  );
}