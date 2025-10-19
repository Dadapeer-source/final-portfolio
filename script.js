// Floating gold electric glow effect on buttons
document.querySelectorAll('.btn, .view-profile, .explore-pages .btn, .explore-btn').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.boxShadow = `
      0 0 10px #FFD700,
      0 0 20px #FFD700,
      0 0 30px #FFD700,
      0 0 40px #FFD700,
      0 0 60px #FFD700 inset,
      0 0 80px #FFD700 inset
    `;
  });
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = '0 4px 20px rgba(255,215,0,0.5)';
  });
});