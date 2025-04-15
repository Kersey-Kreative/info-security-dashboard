document.addEventListener('DOMContentLoaded', () => {
  const avatar = document.getElementById('avatar');
  const dropdownMenu = document.getElementById('dropdown-menu');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebar = document.querySelector('.fixed-sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  // Toggle the dropdown menu when the avatar is clicked
  if (avatar && dropdownMenu) {
    avatar.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
      if (!avatar.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Sidebar close button for mobile
  if (sidebarClose && sidebar && overlay) {
    sidebarClose.addEventListener('click', () => {
      sidebar.classList.remove('mobile-active');
      overlay.classList.remove('active');
      document.body.classList.remove('sidebar-open');
    });
  }
});
