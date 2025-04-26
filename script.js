// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// IntersectionObserver for fade-in sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".fade-in").forEach((section) => {
  observer.observe(section);
});
// — Smooth anchor scroll (if not already) —
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// — Filter Tabs Logic —
const tabs = document.querySelectorAll(".project-tabs button");
const projects = document.querySelectorAll(".project");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // activate tab styling
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    projects.forEach((p) => {
      // show if matches or if 'all'
      if (filter === "all" || p.classList.contains(filter)) {
        p.classList.remove("hidden");
      } else {
        p.classList.add("hidden");
      }
    });
  });
});

// — 3D Tilt Follow for .project cards —
document.querySelectorAll(".project").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse pos within card
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx; // range -1..1
    const dy = (y - cy) / cy;
    const tiltX = dy * 8; // max 8°
    const tiltY = dx * -8; // inverse for Y
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
