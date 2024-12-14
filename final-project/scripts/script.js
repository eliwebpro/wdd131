document.lastModified

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent += document.lastModified;


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

const subject = [
    { name: "Need a Quote"},
    { name: "Request a Repair"},
    { name: "Ask a Question"},
    { name: "Request Support"},
    { name: "Provide Feedback"},
  ];
  
  const subjectSelect = document.querySelector("#subject");
  subject.forEach(subject => {
    const option = document.createElement("option");
    option.textContent = subject.name;
    subjectSelect.appendChild(option);
  });

  let reviewCount = localStorage.getItem("reviewCount");
  reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
  localStorage.setItem("reviewCount", reviewCount);
  
document.addEventListener('DOMContentLoaded', () => {
    const reviewCount = localStorage.getItem("reviewCount") || 0;
    document.querySelector("#review-count").textContent = reviewCount;
  });
  


