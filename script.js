// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Contact form — Formspree-friendly progressive enhancement
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', async (e) => {
    const action = form.getAttribute('action') || '';
    if (action.includes('[ADD_FORMSPREE_ID]')) {
      // No real endpoint configured yet — let it fail gracefully rather than 404 silently.
      e.preventDefault();
      status.textContent = 'Contact form isn\u2019t wired up yet — replace the Formspree ID in the code, or email me directly below.';
      status.className = 'form-status err';
      return;
    }
    e.preventDefault();
    status.textContent = 'Sending…';
    status.className = 'form-status';
    try {
      const res = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        status.textContent = 'Thanks — your message has been sent.';
        status.className = 'form-status ok';
        form.reset();
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      status.textContent = 'Something went wrong — please email me directly instead.';
      status.className = 'form-status err';
    }
  });
}
