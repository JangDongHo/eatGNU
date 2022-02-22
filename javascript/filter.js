const tagBtnContainer = document.querySelector('.tag-filter__tags');
const restaurantContainer = document.querySelector('.restaurant-lists');
const restaurants = document.querySelectorAll('.restaurant-list');

tagBtnContainer.addEventListener('click', (event) => {
  const filter = 
  event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  restaurantContainer.classList.add('anim-out');
  setTimeout(() => {
    restaurants.forEach((restaurant) => {
      if (filter === '*' || filter === restaurant.dataset.type) {
        restaurant.classList.remove('invisible');
      } else {
        restaurant.classList.add('invisible');
      }
    });
    restaurantContainer.classList.remove('anim-out');
  }, 280);
});