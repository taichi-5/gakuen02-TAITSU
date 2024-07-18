 'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

let input = document.querySelector('.input');
let button = document.querySelector('.button');
button.disabled = true;
input.addEventListener('change', stateHandle);
function stateHandle() {
  if (document.querySelector('.input').value === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

