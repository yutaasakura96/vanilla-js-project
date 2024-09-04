const productsPromo = document.querySelector('.products-promo');
const promoContent = document.querySelector('.promo-content');

promoContent.addEventListener('mouseover', () => {
  productsPromo.classList.add('animate')
});
promoContent.addEventListener('mouseout', () => {
  productsPromo.classList.remove('animate')
});
