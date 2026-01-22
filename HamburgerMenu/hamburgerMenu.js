const container = document.querySelector('.container');// Select the hamburger menu container

/*
let isClicked = false;// State variable to track menu status

 container.addEventListener('click', () => {
     if (isClicked) {
         container.classList.remove("active");// Remove active class to reverse animation
     }
    
     else {
         container.classList.add('active')};// Add active class to trigger animation
        isClicked = !isClicked;// Toggle the state variable
     });
*/

container.addEventListener('click', () => {
  // If 'active' exists, remove it; if not, add it.
  container.classList.toggle('active');
});
