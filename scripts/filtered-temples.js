document.lastModified

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent += document.lastModified;


console.log("Temples page loaded.");

const menuButton = document.getElementById('menu');
const headerTitle = document.querySelector('header h1');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    nav.classList.toggle('show');
    
    if (menuButton.classList.contains('show')) {
        headerTitle.classList.add('hidden');
    } else {
        headerTitle.classList.remove('hidden');
    }
});





const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5244.jpg"
  },
  {
    templeName: "Curitiba Brazil",
    location: "Curitiba, Brazil",
    dedicated: "2008, June, 1",
    area: 27850,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-18837.jpg"
  },
  {
    templeName: "Sao Paulo Brazil",
    location: "Sao Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816.jpg"
  }
];


function createTempleCard(temple) {
  let card = document.createElement("section");
  card.classList.add("card");

  let name = document.createElement("h3");
  let location = document.createElement("p");
  let dedicated = document.createElement("p");
  let area = document.createElement("p");
  let img = document.createElement("img");

  name.textContent = temple.templeName;
  location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
  dedicated.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
  area.innerHTML = `<span class="label">Area: </span>${temple.area.toLocaleString()} sq. ft.`;
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", `${temple.templeName} temple`);
  img.setAttribute("loading", "lazy");

  
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(img);

  document.querySelector(".album").append(card);
}

function displayTemples(templesArray) {
  const container = document.querySelector(".album");
  container.innerHTML = "";
  templesArray.forEach(createTempleCard);
}

displayTemples(temples);




document.getElementById("home").addEventListener("click", () => {
  const title = document.querySelector("main h2");
  title.textContent = "Home";
  displayTemples(temples);
})

document.getElementById('old').addEventListener('click', () => {
  const title = document.querySelector('.navigation');
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0].trim());
    return year < 1900;
  });
  title.innerHTML = 'Old'
  displayTemples(oldTemples)
})

document.getElementById('new').addEventListener('click', () => {
  const title = document.querySelector('.navigation');
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0].trim());
    return year > 2000;
  });
  title.innerHTML = 'New'
  displayTemples(newTemples)
})

document.getElementById('large').addEventListener('click', () => {
  const title = document.querySelector('.navigation');
  const largeTemples = temples.filter(temple => {
    const area = temple.area;
    return area > 90000;
  });
  title.innerHTML = 'Large'
  displayTemples(largeTemples)
})

document.getElementById('small').addEventListener('click', () => {
  const title = document.querySelector('.navigation');
  const smallTemples = temples.filter(temple => {
    const area = temple.area;
    return area < 10000;
  });
  title.innerHTML = 'Small'
  displayTemples(smallTemples)
})


