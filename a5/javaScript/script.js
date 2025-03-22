
const images = [ //image array
  { src: "images/alpine-a525.png", alt: "Alpine Formula 1 Team Livery" },
  { src: "images/aston-martin-racing-amr25.png", alt: "Aston Martin Formula 1 Team Livery" },
  { src: "images/ferrari-3.png", alt: "Ferrari Formula 1 Team Livery" },
  { src: "images/haas-vf-25.png", alt: "Haas Formula 1 Team Livery" },
  { src: "images/kick-sauber-c45.png", alt: "Kick Sauber Formula 1 Team Livery" },
  { src: "images/mclaren-mcl39.png", alt: "Mclaren Formula 1 Team Livery" },
  { src: "images/mercedes-f1-w16.png", alt: "Mercedes Formula 1 Team Livery" },
  { src: "images/red-bull-racing-rb21.png", alt: "Red Bull Formula 1 Team Livery" },
  { src: "images/williams-fw47.png", alt: "Williams Formula 1 Team Livery" }
];

let currentIndex = 0; //slideshow index
let timer = 4; //slideshow timer 
let interval; //repeats function after interval 
let autoAdvance = true; //auto advance slides

//DOM elemnts 
const slideImage = document.getElementById("slideImage"); 
const imageDescription = document.getElementById("imageDescription");
const timerDisplay = document.getElementById("timer");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const toggleAutoAdvance = document.getElementById("autoToggle");

function updateSlide() { //updating image and description 
  slideImage.src = images[currentIndex].src;
  slideImage.alt = images[currentIndex].alt;
  imageDescription.textContent = images[currentIndex].alt;
}

function nextSlide() { //button, goes to the next image and description (slide)
  currentIndex = (currentIndex + 1) % images.length;
  resetTimer();
  updateSlide();
}

function prevSlide() { //button, goes to the previous image and description (slide
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  resetTimer();
  updateSlide();
}

function autoSlide() { // when timer is up, go to next slide 
  if (timer === 0) {
    nextSlide(); // go to the next slide
    timer = 4; // reset timer to 4 seconds
  } else {
    timer--; // countdown the timer
  }

  // Update the timer display
  timerDisplay.textContent = `Timer: ${timer}s`;
}

function resetTimer() { // reset the timer
  clearInterval(interval); // clear any previous interval
  timer = 4; // reset the timer to 4 seconds
  timerDisplay.textContent = `Timer: ${timer}s`; // update the timer display

  if (autoAdvance) { // if auto-advance is enabled, restart the interval
    interval = setInterval(autoSlide, 1000); // call autoSlide every second
  } else {
    timerDisplay.textContent = "Auto-advance: OFF"; // show OFF if auto-advance is off
    document.querySelector(".auto-toggle").style.left = "calc(30% - 180px)"; // Adjust position of button when timer is off
  }
}
toggleAutoAdvance.addEventListener("change", (event) => { //toggle auto advance
  autoAdvance = event.target.checked;
  resetTimer();
});


//button event listeners 
previousBtn.addEventListener("click", prevSlide); 
nextBtn.addEventListener("click", nextSlide);

updateSlide();
resetTimer();
