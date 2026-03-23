
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menuIcon");

// OPEN SIDEBAR
menuBtn.addEventListener("click", () => {
    sidebar.classList.add("active");

    // change icon to X
    menuIcon.classList.remove("ri-menu-line");
    menuIcon.classList.add("ri-close-line");
});

// CLOSE SIDEBAR (❌ BUTTON)
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");

    // back to hamburger
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-line");
});


// ACTIVE MENU
const links = document.querySelectorAll(".menu a");

links.forEach(link=>{
    link.addEventListener("click",()=>{
        links.forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
    });
});


const ctx = document.getElementById('barChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Inactive',
        data: [10, 5, 12, 8, 6, 14, 9, 16, 7, 15, 11, 4],
        backgroundColor: '#6b7280' // grey
      },
      {
        label: 'Active',
        data: [14, 8, 15, 10, 9, 18, 12, 20, 10, 17, 13, 6],
        backgroundColor: 'red'
      }
    ]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    },
    scales: {
      x: {
        ticks: { color: "#94a3b8" }
      },
      y: {
        ticks: { color: "#94a3b8" }
      }
    }
  }
});



const monthYear = document.getElementById("monthYear");
const calendarDates = document.getElementById("calendarDates");

let date = new Date();

function renderCalendar() {
  calendarDates.innerHTML = "";

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  monthYear.innerText = date.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  // empty slots
  for (let i = 0; i < firstDay; i++) {
    calendarDates.innerHTML += `<div></div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    let isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    calendarDates.innerHTML += `
      <div class="${isToday ? "today" : ""}">${i}</div>
    `;
  }
}

document.getElementById("prev").onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

document.getElementById("next").onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

renderCalendar();

