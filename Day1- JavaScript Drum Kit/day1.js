function startPlay(e) {
  const keydownedBtn = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const keydownedSound = document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  );
  if (!keydownedSound) return;
  keydownedBtn.classList.add("playing");
  keydownedSound.currentTime = 0;
  keydownedSound.play();
}

function endPlay(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

// yuza's own code
function clickPlay() {
  const keydownedSound = document.querySelector(
    `audio[data-key="${this.dataset.key}"]`
  );
  if (!keydownedSound) return;
  this.classList.add("playing");
  keydownedSound.currentTime = 0;
  keydownedSound.play();
}

const keys = Array.from(document.querySelectorAll(`.key`));
keys.forEach((key) => {
  key.addEventListener("transitionend", endPlay);
  key.addEventListener("click", clickPlay);
});

window.addEventListener("keydown", startPlay);
