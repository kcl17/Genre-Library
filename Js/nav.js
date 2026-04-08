// ═══ Navigation + Theme Toggle ═══

function initNav(activePage) {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  nav.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === activePage) link.classList.add('active');
  });

  const toggle = nav.querySelector('.nav-toggle');
  const links = nav.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.style.padding = '0.8rem clamp(1.5rem, 5vw, 4rem)';
    } else {
      nav.style.padding = '1.2rem clamp(1.5rem, 5vw, 4rem)';
    }
  });

  // Theme Toggle
  const themeBtn = nav.querySelector('.theme-toggle');
  if (!themeBtn) return;

  function getTheme() {
    const saved = localStorage.getItem('genre-lib-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('genre-lib-theme', theme);
    themeBtn.textContent = theme === 'light' ? '☾' : '☀';
    themeBtn.title = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  }

  applyTheme(getTheme());
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

// Apply saved theme immediately to prevent flash
(function() {
  const saved = localStorage.getItem('genre-lib-theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
})();
