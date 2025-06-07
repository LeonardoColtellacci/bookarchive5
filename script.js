const cartSidebar = document.querySelector('.cart-sidebar');
const cartWrapper = document.querySelector('.cart-wrapper');

cartWrapper.addEventListener('click', () => {
  cartSidebar.classList.add('active');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-btn')) {
    cartSidebar.classList.remove('active');
  }
});
