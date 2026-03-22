
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


// Animate percentage cards
document.querySelectorAll(".card h2").forEach(el => {
  let target = +el.getAttribute("data-value");
  let count = 0;

  let interval = setInterval(() => {
    count++;
    el.innerText = count + "%";

    if(count >= target){
      clearInterval(interval);
    }
  }, 20);
});

// Circle score animation
let score = 741;
let max = 1000;

let circle = document.querySelector(".circle");
let scoreText = document.getElementById("score");

let current = 0;

let interval = setInterval(() => {
  current += 5;

  let degree = (current / max) * 360;

  circle.style.background =
    `conic-gradient(#e50914 ${degree}deg, #1f2937 ${degree}deg)`;

  scoreText.innerText = current;

  if(current >= score){
    clearInterval(interval);
  }

}, 10);

// DATA
const ottMonthly = [30,25,35,40,38,45,42,50,48,44,39,28];
const ottYearly = [300,420,380,500,620];

const ottMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const ottYears = ["2020","2021","2022","2023","2024"];

// AREA CHART
let ottCtx = document.getElementById("ottAreaChart").getContext("2d");

let ottAreaChart = new Chart(ottCtx, {
  type: 'line',
  data: {
    labels: ottMonths,
    datasets: [{
      data: ottMonthly,
      borderColor: "#a855f7",
      backgroundColor: "rgba(168,85,247,0.2)",
      fill: true,
      tension: 0.4,
      pointRadius: 0
    }]
  },
  options: {
    plugins:{legend:{display:false}},
    scales:{
      y:{
        ticks:{color:"#aaa"},
        grid:{color:"#1f2937"}
      },
      x:{
        ticks:{color:"#aaa"},
        grid:{display:false}
      }
    }
  }
});

// PIE CHART
let ottPie = new Chart(document.getElementById("ottPieChart"), {
  type: 'doughnut',
  data: {
    datasets: [{
      data:[40,30,20,10],
      backgroundColor:[
        "#7c3aed",
        "#06b6d4",
        "#f59e0b",
        "#ef4444"
      ],
      borderWidth:0
    }]
  },
  options:{
    plugins:{legend:{display:false}},
    cutout:"70%"
  }
});

// DROPDOWN FUNCTION
document.getElementById("ottFilter").addEventListener("change", function(){

  if(this.value === "yearly"){
    ottAreaChart.data.labels = ottYears;
    ottAreaChart.data.datasets[0].data = ottYearly;
  }else{
    ottAreaChart.data.labels = ottMonths;
    ottAreaChart.data.datasets[0].data = ottMonthly;
  }

  ottAreaChart.update();
});

// DATA
const revenueData = {
  week: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    data1: [40, 80, 60, 90, 30, 70, 50],
    data2: [30, 98, 50, 98, 98, 22, 80]
  },
  month: {
    labels: ["W1","W2","W3","W4"],
    data1: [300, 500, 400, 600],
    data2: [250, 450, 350, 550]
  },
  quarter: {
    labels: ["Jan","Feb","Mar"],
    data1: [900, 700, 1100],
    data2: [800, 600, 1000]
  },
  year: {
    labels: ["2021","2022","2023","2024"],
    data1: [3000, 4000, 3500, 5000],
    data2: [2800, 3800, 3200, 4500]
  }
};

// CHART INIT
let ctx = document.getElementById("revenueChart");

let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: revenueData.week.labels,
    datasets: [
      {
        label: "Subscriptions",
        data: revenueData.week.data1,
        borderColor: "#e50914",
        backgroundColor: "rgba(229,9,20,0.2)",
        fill: true,
        tension: 0.4
      },
      {
        label: "Ad Revenue",
        data: revenueData.week.data2,
        borderColor: "#9ca3af",
        backgroundColor: "rgba(156,163,175,0.2)",
        fill: true,
        tension: 0.4
      }
    ]
  },
  options: {
    plugins:{
      legend:{display:false}
    },
    scales:{
      y:{
        ticks:{color:"#aaa"},
        grid:{color:"#1f2937"}
      },
      x:{
        ticks:{color:"#aaa"},
        grid:{display:false}
      }
    }
  }
});

// TAB SWITCH
document.querySelectorAll(".tab").forEach(btn => {

  btn.addEventListener("click", function(){

    // ACTIVE UI
    document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
    this.classList.add("active");

    let type = this.dataset.type;

    chart.data.labels = revenueData[type].labels;
    chart.data.datasets[0].data = revenueData[type].data1;
    chart.data.datasets[1].data = revenueData[type].data2;

    chart.update();
  });

});

// ADD CONTENT BUTTON
document.querySelectorAll(".add-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    window.location.href = "dashboard-404.html";
  });
});

// EDIT BUTTON
document.querySelectorAll(".edit").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    window.location.href = "dashboard-404.html";
  });
});

// DELETE BUTTON
document.querySelectorAll(".delete").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    window.location.href = "dashboard-404.html";
  });
});