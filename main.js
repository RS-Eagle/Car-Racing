function gameStart() {
  mainbox1.style.display = "block";
  start.style.display = "none";
  setTimeout(() => {
    secondCar.style.animationPlayState = "running";
  }, 2000);
  let randomCar = document.querySelector(".second");
  let userCar = document.querySelector(".first");
  let mainBox = document.querySelector(".mainbox");
  let second = document.querySelector(".second");
  var secondupdate;
  let oneBolean = false;
  let score = 0;
  let audioo = new Audio("a.mp3");
  let crash = new Audio("b.mp3");

  audioo.play();
  audioo.pause();
  audioo.play();

  randomCar.addEventListener("animationiteration", () => {
    score++;
    let randomNumber = Math.floor(Math.random() * 3);
    //   console.log(randomNumber);
    if (randomNumber === 1 || randomNumber === 0) {
      if (randomCar.classList.contains("updated")) {
      } else {
        randomCar.classList.toggle("updated");
        randomCar.classList.toggle("second");
        secondupdate = document.querySelector(".updated");
        if (oneBolean) {
          secondupdate.style.animationDuration = `1s`;
        }
      }
    } else {
      if (randomCar.classList.contains("updated")) {
        randomCar.classList.toggle("updated");
        randomCar.classList.toggle("second");
      }
    }
  });

  const validate = (key) => {
    if (key == 37) {
      if (!userCar.classList.contains("userupdate")) {
        userCar.classList.toggle("userupdate");
        userCar.classList.toggle("first");
      }
    } else if (key == 39) {
      if (!userCar.classList.contains("first")) {
        userCar.classList.toggle("userupdate");
        userCar.classList.toggle("first");
      }
      console.log("Hii");
    }
  };

  const pressed = (e) => {
    //   console.log(e.keyCode);
    validate(e.keyCode);
  };

  setInterval(() => {
    if (
      (userCar.classList.contains("first") &&
        !randomCar.classList.contains("second")) ||
      (userCar.classList.contains("userupdate") &&
        !randomCar.classList.contains("updated"))
    ) {
      let mainCar = parseInt(
        window.getComputedStyle(randomCar).getPropertyValue("top")
      );
      if (mainCar > 168 && mainCar < 516) {
        crash.play();
        audioo.pause();
        mainbox1.style.display = "none";
        end.style.display = "block";
        endh2.innerHTML = `You Have Scored: ${score}`;
        score = 0;
        document.querySelector(".btn2").addEventListener("click", () => {
          window.location.reload();
        });
      }
    }
    if (mainbox === 2) {
      clearInterval(mainboxInt);
    }
  }, 50);
  document.addEventListener("keydown", pressed);

  let mainbox = 6;
  const mainboxInt = setInterval(() => {
    mainbox -= 1;
    mainBox.style.animationDuration = `${mainbox}s`;
  }, 2000);

  setTimeout(() => {
    second.style.animationDuration = `1s`;
    oneBolean = true;
  }, 8000);
}

var secondCar = document.querySelector(".second");
var mainbox1 = document.querySelector(".mainbox");
var btn = document.querySelector(".btn1");
var start = document.querySelector(".start");
var end = document.querySelector(".end");
var endh2 = document.querySelector(".end h2");
function gameIniti() {
  secondCar.style.animationPlayState = "paused";
  end.style.display = "none";
  start.style.display = "block";
  mainbox1.style.display = "none";
}
btn.addEventListener("click", gameStart);

gameIniti();
