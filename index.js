//TypeWriter on Hero Section
class typeWriter {
  constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 400;
    if (this.isDeleting) {
      typeSpeed /= 3;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 400;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}
document.addEventListener("DOMContentLoaded", init);
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new typeWriter(txtElement, words, wait);
}

//About-me transition
function showAboutMeText() {
  const aboutMeText = document.querySelector(".about-me-text");
  const aboutMeTextPosition = aboutMeText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 2;
  if (aboutMeTextPosition < screenPosition) {
    aboutMeText.classList.add("about-me-transition");
  }
}
window.addEventListener("scroll", showAboutMeText);
