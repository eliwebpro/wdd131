document.lastModified

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent += document.lastModified;


console.log("Temples page loaded.");

// Store the selected elements that we are going to use. 
const menuButton = document.getElementById('menu');
const headerTitle = document.querySelector('header h1');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    nav.classList.toggle('show');
    
    // Oculta ou mostra o título com base no estado do menu
    if (menuButton.classList.contains('show')) {
        headerTitle.classList.add('hidden');
    } else {
        headerTitle.classList.remove('hidden');
    }
});



