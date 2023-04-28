const restaurants = document.getElementById("restaurantId")?.children ?? [];

for (let i = 0; i < restaurants.length; i++) {
  if (restaurants[i].getAttribute("data-owner-name") === "Richard") {
    restaurants[i].setAttribute("data-owner-name", "Mason");
  }
}
