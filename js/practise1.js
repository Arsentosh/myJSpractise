const counter = document.querySelector(".counter");
const clickMeBtn = document.querySelector(".click-me");

let currentValue = 0;
// const randomNumber = Math.floor(Math.random() * 100);

clickMeBtn.addEventListener("click", () => {
  currentValue += 1;
  counter.textContent = currentValue;

  if (window.innerWidth < 428) {
    clickMeBtn.style.marginTop = `${Math.floor(Math.random() * 960)}px`;
    clickMeBtn.style.marginLeft = `${Math.floor(Math.random() * 410)}px`;
  } else if (window.innerWidth < 769) {
    clickMeBtn.style.marginTop = `${Math.floor(Math.random() * 650)}px`;
    clickMeBtn.style.marginLeft = `${Math.floor(Math.random() * 1100)}px`;
  } else {
    clickMeBtn.style.marginTop = `${Math.floor(Math.random() * 1000)}px`;
    clickMeBtn.style.marginLeft = `${Math.floor(Math.random() * 2300)}px`;
  }
});

//* clickMeBtn.addEventListener("click", () => {
//*   currentValue += 1;
//*   counter.textContent = currentValue;
//* });

//* clickMeBtn.addEventListener("mouseover", () => {
//*   clickMeBtn.style.marginTop = `${Math.floor(Math.random() * 1000)}px`;
//*   clickMeBtn.style.marginLeft = `${Math.floor(Math.random() * 2000)}px`;
//* });
