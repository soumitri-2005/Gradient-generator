let btnOne = document.getElementById("btn-one");
let btnTwo = document.getElementById("btn-two");
let copyCode = document.querySelector(".copy-code");
let rgb1 = "#98ff3e";
let rgb2 = "#030829";

const hexValues = () => {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handleBtnOne = () => {
  rgb1 = hexValues();
  document.body.style.backgroundImage = `linear-gradient(to bottom left, ${rgb1}, ${rgb2})`;
  btnOne.innerHTML = rgb1;
  copyCode.innerHTML = `background-image: linear-gradient(to bottom left,  ${rgb1}, ${rgb2})`;
};

const handleBtnTwo = () => {
  rgb2 = hexValues();
  document.body.style.backgroundImage = `linear-gradient(to top right, ${rgb1}, ${rgb2})`;
  btnTwo.innerHTML = rgb2;
  copyCode.innerHTML = `background-image: linear-gradient(to bottom left, ${rgb1}, ${rgb2})`;
};

btnOne.addEventListener("click", handleBtnOne);
btnTwo.addEventListener("click", handleBtnTwo);

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);
  alert("Copied");
});
