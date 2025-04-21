export const triggerParticles = () => {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "0";
  container.style.left = "0";
  container.style.width = "100vw";
  container.style.height = "100vh";
  container.style.pointerEvents = "none";
  container.style.overflow = "hidden";
  container.style.zIndex = "9999";

  for (let i = 0; i < 80; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.width = "0.5rem";
    particle.style.height = "0.5rem";
    particle.style.background = getRandomColor();
    particle.style.borderRadius = "50%";
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animation = `fall ${2 + Math.random() * 3}s ease-out forwards`;
    container.appendChild(particle);
  }

  document.body.appendChild(container);

  setTimeout(() => {
    document.body.removeChild(container);
  }, 5000);
};

const getRandomColor = () => {
  const colors = ["#FFD700", "#FF69B4", "#7FFFD4", "#FF4500", "#ADFF2F"];
  return colors[Math.floor(Math.random() * colors.length)];
};
