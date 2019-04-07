import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla2!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// default
let defaultCount = 0;
let $default = document.getElementById("default");

$default.onmousemove = defaultMouseMove;

function defaultMouseMove() {
  defaultCount++;
  $default.innerText = defaultCount;
}

// debounce

let debourceCount = 0;
let $debounce = document.getElementById("debounce");

$debounce.onmousemove = debounce(debounceMouseMove, 1000);

function debounceMouseMove() {
  debourceCount++;
  $debounce.innerText = debourceCount;
}

function debounce(func, delay, immediate = true) {
  let timer;
  return function(...args) {
    if (timer) clearTimeout(timer);

    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (callNow) func.apply(this, args);
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  };
}

// throlle

let throllteCount = 0;
let $throllte = document.getElementById("throllte");

$throllte.onmousemove = throllte(throllteMouseMove, 1000);

function throllteMouseMove() {
  throllteCount++;
  $throllte.innerText = throllteCount;
}

function throllte(func, delay, type) {
  let pre = 0;
  let timer;
  return function(...args) {
    // timestamp version
    if (type === 1) {
      let now = Date.now();
      console.log(now, pre);
      if (now - pre > delay) {
        func.call(this, args);
        pre = now;
      }
    }

    // normal version
    if (!timer) {
      timer = setTimeout(() => {
        func.call(this, args);
        timer = null;
      }, delay);
    }
  };
}
