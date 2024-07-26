let currentCard = 1;

document.querySelectorAll(".next").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Next Btn Clicked");

    if (currentCard === 1) {
      document.querySelector("#pro1").style.left = "-50%";
      document.querySelector("#pro2").style.left = "50%";
    } else if (currentCard === 2) {
      document.querySelector("#pro2").style.left = "-50%";
      document.querySelector("#pro3").style.left = "50%";
    }

    currentCard = (currentCard % 3) + 1;
  });
});

document.querySelectorAll(".previous").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Previous Btn Clicked");

    if (currentCard === 3) {
      document.querySelector("#pro3").style.left = "150%";
      document.querySelector("#pro2").style.left = "50%";
    } else if (currentCard === 2) {
      document.querySelector("#pro2").style.left = "150%";
      document.querySelector("#pro1").style.left = "50%";
    }

    currentCard = (currentCard - 1) || 3;
  });
});


// document.getElementById("myForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   document.querySelector('input[name="name"]').value = '';
//   document.querySelector('input[name="email"]').value = '';
//   document.querySelector('textarea[name="message"]').value = '';

// })




// const spark = (e) => {
//   let i = document.createElement("i");
//   console.log(e)
//   i.style.left = (e.clinetX) + "px";
//   i.style.top = (e.clientY) + "px";
//   i.style.scale= `${Math.random() * 2 +1}`;
//   i.style.setProperty("--x", getRandomTransitionVal());
//   i.style.setProperty("--y", getRandomTransitionVal());


//   document.body.appendChild(i);

//   setTimeout(() => {
//     document.body.removeChild(i);
//   }, 2000);
// }

// const getRandomTransitionVal = (e)=>{
//   return `${Math.random() * 400 - 200}px`
// }

// document.addEventListener("mousemove", spark)







for (let index = 0; index < 20; index++) {
  let i = document.createElement("div");
  i.className = "circle";
  document.body.appendChild(i);
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle")

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
})

document.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  })

  requestAnimationFrame(animateCircles);
}

animateCircles();