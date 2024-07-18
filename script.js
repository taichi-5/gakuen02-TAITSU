'use strict'
// ここに JavaScript のコードを書きましょう

const daisui =document.querySelector("#大水槽")
console.log(daisui);
const toolTip =document.querySelector("#toolTip")
console.log(toolTip);

daisui.addEventListener("mouseover", () => {
    toolTip.style.display = 'block';
  }, false);

daisui.addEventListener('mouseleave', () => {
    toolTip.style.display = 'none';
  }, false);

