const character = document.querySelector(".character");
const game = document.querySelector(".game");
const block = document.querySelector(".block");

game.addEventListener("click", () => {
  jump();
});

function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
}

const checkLose = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 70 && blockLeft > 0 && characterTop >= 350) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You lose");
    block.style.animation = "continue";
    block.style.display = "continue";
  }
}, 10);
