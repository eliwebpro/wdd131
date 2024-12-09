const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chaptersArray 
let chaptersArray = getChapterList() || [];

// Populate the list 
chaptersArray.forEach(chapter => displayList(chapter));

// Event listener for adding a chapter
button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    displayList(input.value); // Display the new chapter
    chaptersArray.push(input.value); // Add to the array
    setChapterList(); // Update localStorage
    input.value = ''; // Clear the input field
    input.focus(); // Focus back on input
  }
});

// Function to display a chapter 
function displayList(item) {
  const li = document.createElement('li');
  li.textContent = item;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  
  li.append(deleteButton);
  list.append(li);

  // Add delete functionality
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus(); // Focus back on input
  });
}

// Function to set data
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get data 
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter 
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove the ❌ from the chapter text
  chaptersArray = chaptersArray.filter(item => item !== chapter); // Remove the chapter from the array
  setChapterList(); // Update localStorage
}
