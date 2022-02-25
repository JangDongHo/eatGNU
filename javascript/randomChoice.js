const randChoiceBtn = document.querySelector(".top-bars__choice");
const restaurantAllList = document.querySelectorAll(".restaurant-list");
const topbarsHeight = document.querySelector(".top-bars").offsetHeight;
var randomRestaurant;

var restaurantObj = function(index, offsetTop) {
  this.index = index;
  this.offsetTop = offsetTop;
}

function getRestaurants() {
  var restaurantLists = [];
  var restaurantIndex = -1;
  restaurantAllList.forEach(restaurant => {
    restaurantIndex += 1;
    if (restaurant.classList.value.search("invisible") === -1) {
      restaurantLists.push(new restaurantObj(restaurantIndex, restaurant.offsetTop));
    }
  })
  return restaurantLists;
}

function choiceRestaurant() {
  if(randomRestaurant !== undefined) {
    restaurantAllList[randomRestaurant.index].lastElementChild.style.backgroundColor = "white";
  }
  const restaurants = getRestaurants();
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  randomRestaurant = restaurants[randomIndex];
  window.scrollTo({top:randomRestaurant.offsetTop - topbarsHeight * 5, behavior:"smooth"});
  restaurantAllList[randomRestaurant.index].lastElementChild.style.backgroundColor = "#93c2eb";
};

randChoiceBtn.addEventListener("click", choiceRestaurant)