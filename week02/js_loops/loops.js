const myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      { place: "Rexburg, ID", length: "5 years" },
      { place: "Ammon, ID", length: "3 years" },
      { place: "Sandy, UT", length: "1 year" },
    ],
  };
  
  function createFoodHTML(food) {
    return `<li>${food}</li>`;
  }
  
  function createPlaceHTML(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  function generateListHTML(list, templateFunction) {
    return list.map(templateFunction).join('');
  }
  
  const foodsElement = document.querySelector('#favorite-foods');
  const placesElement = document.querySelector('#places-lived');
  
  foodsElement.innerHTML = generateListHTML(myInfo.favoriteFoods, createFoodHTML);
  placesElement.innerHTML = generateListHTML(myInfo.placesLived, createPlaceHTML);
  