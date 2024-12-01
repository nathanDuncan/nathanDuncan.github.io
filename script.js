function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

////////////////////////////////////////////
/////////////// UAV Animation //////////////
////////////////////////////////////////////
function randomPosition() {
    const vw = window.innerWidth;  // Viewport width
    const vh = window.innerHeight; // Viewport height
  
    // Generate random x and y positions within the viewport
    const x = Math.random() * vw;
    const y = Math.random() * vh;
  
    return { x, y };
}
  
function updateRotation(uav) {
    const prevX = parseFloat(uav.dataset.x) || 0;
    const prevY = parseFloat(uav.dataset.y) || 0;
    const prevVX = parseFloat(uav.dataset.vx) || 0; // Previous velocity in X
  
    const currentTime = Date.now();
    const elapsedTime = (currentTime - parseFloat(uav.dataset.time)) / 1000; // Time in seconds
  
    // Calculate velocity in X
    const newVX = (uav.offsetLeft - prevX) / elapsedTime;
  
    // Calculate acceleration in X (change in velocity)
    const accelerationX = (newVX - prevVX) / elapsedTime;
  
    // Map acceleration to rotation
    const rotation = Math.min(Math.max(accelerationX / 10, -45), 45); // Clamp between -45 and 45 degrees
  
    // Apply rotation without affecting position
    uav.style.transform = `rotate(${rotation}deg)`;
  
    // Update stored data attributes for the next frame
    uav.dataset.vx = newVX;
    uav.dataset.time = currentTime;
  
    // Request the next frame to update rotation
    // requestAnimationFrame(() => updateRotation(uav));
    // Schedule the next position movement after the duration
    setTimeout(() => updateRotation(uav), duration * 500);
}
  
function moveUAV(uav) {

    const { x: newX, y: newY } = randomPosition(); // New random position
  
    // Apply the new position
    uav.style.transform = `translate(${newX}px, ${newY}px)`;
  
    // Update stored data for position
    uav.dataset.x = newX;
    uav.dataset.y = newY;
  
    // Randomize speed for the next movement
    const duration = Math.random() * 2.5 + 2; // Between 2s and 3s
    uav.style.transition = `transform ${duration}s ease-in-out`;
  
    // Schedule the next position movement after the duration
    setTimeout(() => moveUAV(uav), duration * 1000);
}

function animateUAV(uav) {


    if ((uav.dataset.iterator*50) > uav.dataset.duration == 0) {
        ///// TRANSLATION OF UAV //////
        const { x: newX, y: newY } = randomPosition(); // New random position
      
        // Randomize speed for the next movement
        uav.dataset.duration = Math.random() * 2.5 + 2; // Between 2s and 4.5s
        uav.style.transition = `transform ${duration}s ease-in-out`;

        // Apply the new position
        uav.style.transform = `translate(${newX}px, ${newY}px)`;

        // Update stored data for position
        uav.dataset.x = newX;
        uav.dataset.y = newY;
        uav.dataset.iterator = -1;
    }

    uav.dataset.iterator = uav.dataset.iterator + 1;

    ///// ROTATION OF UAV /////
    const prevX = parseFloat(uav.dataset.x);
    const prevVX = parseFloat(uav.dataset.vx); // Previous velocity in X
  
    const currentTime = Date.now();
    const elapsedTime = (currentTime - parseFloat(uav.dataset.time)) / 1000; // Time in seconds
  
    // Calculate velocity in X
    const newVX = (uav.offsetLeft - prevX) / elapsedTime;
  
    // Calculate acceleration in X (change in velocity)
    const accelerationX = (newVX - prevVX) / elapsedTime;
  
    // Map acceleration to rotation
    const rotation = Math.min(Math.max(accelerationX / 10, -45), 45); // Clamp between -45 and 45 degrees
  
    // Apply combined transformation for translate and rotation
    const newTransform = `translate(${uav.dataset.x}px, ${uav.dataset.y}px) rotate(${rotation}deg)`;
    uav.style.transform = newTransform;
  
    // Update stored data attributes for the next frame
    uav.dataset.vx = newVX;
    uav.dataset.time = currentTime;

    // Schedule the next position movement after the duration
    setTimeout(() => animateUAV(uav), 50);
}
  
// Initialize movement for all uavs
document.querySelectorAll('.stochastic_uav').forEach(uav => {
    // Initialize data attributes
    uav.dataset.x = 0;
    uav.dataset.y = 0;
    uav.dataset.vx = 0;
    uav.dataset.time = Date.now();
    uav.dataset.iterator = 0;
    uav.dataset.duration = 25000;

    moveUAV(uav);
    // updateRotation(uav);
    // animateUAV(uav);
});
