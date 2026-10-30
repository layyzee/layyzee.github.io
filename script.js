// ==========================================================================
// Balaji Palani - Senior Scrum Master Portfolio Scripts
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // 3. Navbar background blur on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('shadow-xl', 'bg-[#090d16]/95');
      navbar?.classList.remove('bg-[#090d16]/85');
    } else {
      navbar?.classList.remove('shadow-xl', 'bg-[#090d16]/95');
      navbar?.classList.add('bg-[#090d16]/85');
    }
  });
});

// 4. Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 2500);
}

// 5. Copy to Clipboard
window.copyToClipboard = function (text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${text}`);
    if (buttonElement) {
      const originalText = buttonElement.textContent;
      buttonElement.textContent = 'Copied!';
      setTimeout(() => {
        buttonElement.textContent = originalText;
      }, 2000);
    }
  }).catch(() => {
    showToast('Failed to copy');
  });
};

// 6. Contact Form Email Helper
window.handleContactSubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById('sender-name')?.value || '';
  const subject = document.getElementById('sender-subject')?.value || '';
  const message = document.getElementById('sender-message')?.value || '';

  const body = encodeURIComponent(
    `Hello Balaji,\n\nMy name is ${name}.\n\n${message}\n\nBest regards,\n${name}`
  );
  const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);

  window.location.href = `mailto:balajinia@gmail.com?subject=${subjectEncoded}&body=${body}`;
  showToast('Opening your email application...');
};
