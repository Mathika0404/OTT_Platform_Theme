window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.transition = "opacity 0.5s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);

  }, 3000); // 3 seconds

});



  /* SCROLL EFFECT */
  window.addEventListener("scroll", () => {
    document.querySelector(".navbar")
      .classList.toggle("scrolled", window.scrollY > 50);
  });

    /* MOBILE MENU */
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });


let isSignup = false;

/* OPEN */
function openLogin(){
  document.getElementById("loginModal").style.display = "flex";
  isSignup = false;
  updateForm();
}

/* CLOSE */
function closeLogin(){
  document.getElementById("loginModal").style.display = "none";
}

/* SWITCH LOGIN/SIGNUP */
function toggleAuth(){
  isSignup = !isSignup;
  updateForm();
}

/* UPDATE FORM */
function updateForm(){

  document.getElementById("formTitle").innerText =
    isSignup ? "Create Your OTT Account" : "Welcome Back";

  document.getElementById("formSubtitle").innerText =
    isSignup 
    ? "Sign up and enjoy unlimited streaming"
    : "Login to continue watching your favorite movies & shows";

  document.getElementById("submitBtn").innerText =
    isSignup ? "Create Account" : "Login to Dashboard";

  document.getElementById("switchText").innerText =
    isSignup ? "Already have an account?" : "Don't have an account?";

  document.querySelector(".switch-text a").innerText =
    isSignup ? "Login" : "Sign up";

  document.getElementById("fullName").style.display =
    isSignup ? "block" : "none";

  document.getElementById("confirmPassword").style.display =
    isSignup ? "block" : "none";

  document.getElementById("loginRoleBox").style.display =
    isSignup ? "none" : "block";
}

/* SUBMIT */
function handleAuthSubmit(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if(!isSignup){

    const role = document.getElementById("loginRole").value;

    if(role === "admin"){
      window.location.href = "admin-dashboard.html";
    }
    else if(role === "user"){
      window.location.href = "user-dashboard.html";
    }

  } 
  else {

    const name = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phoneNumber").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // ✅ VALIDATION
    if(name === "" || phone === "" || email === "" || password === "" || confirmPassword === ""){
      alert("Please fill all fields!");
      return;
    }

    if(password !== confirmPassword){
      alert("Passwords do not match!");
      return;
    }

    // ✅ SUCCESS → REDIRECT
    window.location.href = "404.html";
  }
}

/* PASSWORD TOGGLE */
function togglePassword(){

  const password = document.getElementById("loginPassword");
  const eyeIcon = document.getElementById("eyeIcon");

  if(password.type === "password"){
    password.type = "text";
    eyeIcon.classList.replace("ri-eye-off-line","ri-eye-line");
  } else {
    password.type = "password";
    eyeIcon.classList.replace("ri-eye-line","ri-eye-off-line");
  }
}

/* OUTSIDE CLICK CLOSE */
window.addEventListener("click", function(e){
  const modal = document.getElementById("loginModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});


const videos = [
  {
    src: "images/zootopia_video.mp4",
    title: "Zootopia 2",
    desc: "In a city where every animal has a story, Judy Hopps and Nick Wilde return for a thrilling new case that uncovers hidden secrets, unexpected alliances, and a mystery that could change Zootopia forever."
  },
  {
    src: "images/conjuring_video.mp4",
    title: "Conjuring",
    desc: "“When a family is haunted by a terrifying supernatural presence, paranormal investigators Ed and Lorraine Warren step in—uncovering a dark and sinister force beyond imagination.”"
  },
  {
    src: "images/demon_video.mp4",
    title: "Demonslayer",
    desc: "After his family is slaughtered by demons, Tanjiro Kamado embarks on a relentless journey to become a demon slayer and save his sister—uncovering a world of danger, power, and unbreakable bonds."
  },
  {
    src: "images/jocker_video.mp4",
    title: "Joker",
    desc: "In a society that ignores and isolates him, Arthur Fleck slowly descends into madness—transforming into the iconic Joker and unleashing chaos on Gotham."
  },
  {
    src: "images/sita_video.mp4",
    title: "Sita Ram",
    desc: "A timeless love story unfolds through heartfelt letters as an orphaned soldier and a mysterious woman find each other—proving that true love transcends distance, fate, and time.."
  }
];

const thumbs = document.querySelectorAll(".thumb");

function changeVideo(index) {
  const mainVideo = document.getElementById("bgVideo");
  const title = document.getElementById("title");
  const desc = document.getElementById("desc");

  // change background video
  mainVideo.src = videos[index].src;
  mainVideo.play();

  // change text
  title.innerText = videos[index].title;
  desc.innerText = videos[index].desc;

  // active border
  thumbs.forEach(v => v.classList.remove("active"));
  thumbs[index].classList.add("active");
}


/* AUTO SLIDER */
const autoSlider = document.getElementById("slider");

let autoScroll = 0;

function autoSlide() {
  autoScroll += 200;

  if (autoScroll >= autoSlider.scrollWidth / 2) {
    autoScroll = 0;
  }

  autoSlider.style.transform = `translateX(-${autoScroll}px)`;
}

setInterval(autoSlide, 2000);


const manualSlider = document.getElementById("sliders");

let manualScroll = 0;
const scrollStep = 300;

/* 🔥 CLONE FIRST FEW ITEMS */
const cards = manualSlider.children;
const cloneCount = 5; // smooth loop

for (let i = 0; i < cloneCount; i++) {
  let clone = cards[i].cloneNode(true);
  manualSlider.appendChild(clone);
}

/* TOTAL WIDTH LIMIT */
const maxScroll = manualSlider.scrollWidth - manualSlider.clientWidth;

function slideRight() {
  manualScroll += scrollStep;

  manualSlider.style.transition = "transform 0.4s ease";
  manualSlider.style.transform = `translateX(-${manualScroll}px)`;

  /* RESET (SEAMLESS LOOP) */
  if (manualScroll >= maxScroll) {
    setTimeout(() => {
      manualSlider.style.transition = "none";
      manualScroll = 0;
      manualSlider.style.transform = `translateX(0px)`;
    }, 400);
  }
}

function slideLeft() {
  manualScroll -= scrollStep;

  if (manualScroll < 0) {
    manualScroll = 0;
  }

  manualSlider.style.transition = "transform 0.4s ease";
  manualSlider.style.transform = `translateX(-${manualScroll}px)`;
}

document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});