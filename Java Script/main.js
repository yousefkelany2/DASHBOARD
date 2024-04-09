$(".ss .box").click(function(){
    $(this).next(".MENU_BAR").slideToggle(500)
    $(".ss .box .up").toggle()
    $(".ss .box .down").toggle()
})
$(".moon").click(function(){
    $("body").addClass("dark");
    $(".moon").hide()
    $(".sun").show()
})
$(".sun").click(function(){
    $("body").removeClass("dark");
    $(".moon").show()
    $(".sun").hide()
})

// Start Digtal
/* window.onload = function () {
    document.querySelector(".count1").onclick();
  };
   */
  document.querySelector(".count1").onclick = function () {
    let x1 = 0;
  
    let y1 = setInterval(function () {
      x1++;
      document.querySelector(".count1").innerHTML = `+ ${x1} `;
      if (x1 == 150) {
        clearInterval(y1);
      }
    }, 30);
  };
  
/* window.onload = function () {
    document.querySelector(".count2").onclick();
  };
   */
  document.querySelector(".count2").onclick = function () {
    let x2 = 0;
  
    let y2 = setInterval(function () {
      x2++;
      document.querySelector(".count2").innerHTML = `+ ${x2} `;
      if (x2 == 50) {
        clearInterval(y2);
      }
    }, 50);
  };
  
/* window.onload = function () {
    document.querySelector(".count3").onclick();
  };
   */
  document.querySelector(".count3").onclick = function () {
    let x3 = 0;
  
    let y3 = setInterval(function () {
      x3++;
      document.querySelector(".count3").innerHTML = `+ ${x3} `;
      if (x3 == 100) {
        clearInterval(y3);
      }
    }, 40);
  };
  
window.onload = function () {
    document.querySelector(".count4").onclick();
    document.querySelector(".count3").onclick();
    document.querySelector(".count2").onclick();
    document.querySelector(".count1").onclick();
  };
  
  document.querySelector(".count4").onclick = function () {
    let x4 = 0;
  
    let y4 = setInterval(function () {
      x4++;
      document.querySelector(".count4").innerHTML = `+ ${x4} `;
      if (x4 == 200) {
        clearInterval(y4);
      }
    }, 20);
  };
  // End Digtal
  // Start Canves
  const hValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const zValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: hValues,
    datasets: [{
      backgroundColor: barColors,
      data: zValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2024"
    }
  }
});



const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
  // end Canves

// Start Media
$(".MeNu").click(function(){
    $(".Major_bar").slideToggle(500)
    $(".MeNu").hide()
    $(".MENU .close").show()
})
$(".MENU .close").click(function(){
    $(".Major_bar").slideToggle(500)
    $(".MeNu").show()
    $(".MENU .close").hide()
})
$(".MAIN_MENU").click(function(){
    $(".protofile").slideToggle(500)
    $(".MAIN_MENU").hide()
    $("nav .CLOSE").show()
})
$("nav .CLOSE").click(function(){
    $(".protofile").slideToggle(500)
    $(".MAIN_MENU").show()
    $("nav .CLOSE").hide()
})