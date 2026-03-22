const tvSlider = document.getElementById("tvSlider");

let tvScroll = 0;
const tvStep = 265;

// infinite loop
tvSlider.innerHTML += tvSlider.innerHTML;

function tvSlideRight() {
  tvScroll += tvStep;

  if (tvScroll >= tvSlider.scrollWidth / 2) {
    tvScroll = 0;
  }

  tvSlider.style.transform = `translateX(-${tvScroll}px)`;
}

function tvSlideLeft() {
  tvScroll -= tvStep;

  if (tvScroll < 0) {
    tvScroll = tvSlider.scrollWidth / 2;
  }

  tvSlider.style.transform = `translateX(-${tvScroll}px)`;
}



const sportSlider = document.getElementById("sportSlider");

let sportScroll = 0;
const sportStep = 265;

sportSlider.innerHTML += sportSlider.innerHTML;

function sportSlideRight() {
  sportScroll += sportStep;

  if (sportScroll >= sportSlider.scrollWidth / 2) {
    sportScroll = 0;
  }

  sportSlider.style.transform = `translateX(-${sportScroll}px)`;
}

function sportSlideLeft() {
  sportScroll -= sportStep;

  if (sportScroll < 0) {
    sportScroll = sportSlider.scrollWidth / 2;
  }

  sportSlider.style.transform = `translateX(-${sportScroll}px)`;
}


const movieSlider = document.getElementById("movieSlider");

let movieScroll = 0;
const movieStep = 265;

movieSlider.innerHTML += movieSlider.innerHTML;

function movieSlideRight() {
  movieScroll += movieStep;

  if (movieScroll >= movieSlider.scrollWidth / 2) {
    movieScroll = 0;
  }

  movieSlider.style.transform = `translateX(-${movieScroll}px)`;
}

function movieSlideLeft() {
  movieScroll -= movieStep;

  if (movieScroll < 0) {
    movieScroll = movieSlider.scrollWidth / 2;
  }

  movieSlider.style.transform = `translateX(-${movieScroll}px)`;
}



const dramaSlider = document.getElementById("dramaSlider");

let dramaScroll = 0;
const dramaStep = 265;

// infinite loop
dramaSlider.innerHTML += dramaSlider.innerHTML;

function dramaSlideRight() {
  dramaScroll += dramaStep;

  if (dramaScroll >= dramaSlider.scrollWidth / 2) {
    dramaScroll = 0;
  }

  dramaSlider.style.transform = `translateX(-${dramaScroll}px)`;
}

function dramaSlideLeft() {
  dramaScroll -= dramaStep;

  if (dramaScroll < 0) {
    dramaScroll = dramaSlider.scrollWidth / 2;
  }

  dramaSlider.style.transform = `translateX(-${dramaScroll}px)`;
}



const animeSlider = document.getElementById("animeSlider");

let animeScroll = 0;
const animeStep = 265;

// infinite loop
animeSlider.innerHTML += animeSlider.innerHTML;

function animeSlideRight() {
  animeScroll += animeStep;

  if (animeScroll >= animeSlider.scrollWidth / 2) {
    animeScroll = 0;
  }

  animeSlider.style.transform = `translateX(-${animeScroll}px)`;
}

function animeSlideLeft() {
  animeScroll -= animeStep;

  if (animeScroll < 0) {
    animeScroll = animeSlider.scrollWidth / 2;
  }

  animeSlider.style.transform = `translateX(-${animeScroll}px)`;
}

