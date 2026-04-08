// ═══ Navigation Component ═══
function initNav(activePage) {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  // Highlight active link
  nav.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === activePage) link.classList.add('active');
  });

  // Mobile toggle
  const toggle = nav.querySelector('.nav-toggle');
  const links = nav.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    // close on link click
    links.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Shrink nav on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) {
      nav.style.padding = '0.8rem clamp(1.5rem, 5vw, 4rem)';
    } else {
      nav.style.padding = '1.2rem clamp(1.5rem, 5vw, 4rem)';
    }
    lastScroll = y;
  });
}
