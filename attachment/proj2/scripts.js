const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElements) => {
  return window.getComputedStyle(selectedElements).backgroundColor;
};

//console.log(getBGColor(orange));

// var circleColorChanger = getBGColor(orange);

// orange.addEventListener("mouseenter", () => {

//     center.style.background = circleColorChanger;

// });

const circleAutoColorChanger = (element, circleColorChanger) => {
  return element.addEventListener("mouseenter", () => {
    center.style.background = circleColorChanger;
  });
};

circleAutoColorChanger(red, getBGColor(red));
circleAutoColorChanger(pink, getBGColor(pink));
circleAutoColorChanger(orange, getBGColor(orange));
circleAutoColorChanger(cyan, getBGColor(cyan));
circleAutoColorChanger(violet, getBGColor(violet));
