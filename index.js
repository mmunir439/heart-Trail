let bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", function (event) {
  let xpos = event.offsetX; //
  let ypos = event.offsetY;
  let spaneEl = document.createElement("span"); // creating the span element
  bodyEl.appendChild(spaneEl); //appending the element into body
  spaneEl.style.left = xpos + "px";
  spaneEl.style.top = ypos + "px";
  let size =
    Math.random() *
    100; /*Math.random() is a built-in JavaScript method that generates a random floating-point number between 0 (inclusive) and 1 (exclusive). So, it could return a value like 0.234, 0.789, or 0.999, but it will never return exactly 1 or anything equal to or greater than 1. */
  spaneEl.style.height = size + "px";
  /*
spanEl.style.width = size + "px"; dynamically sets the width of the spanEl element to a random value (or a value stored in size) followed by the unit "px" (pixels).*/
  spaneEl.style.width = size + "px";
  setTimeout(() => {
    /*The setTimeout() method calls a function after a number of milliseconds.

1 second = 1000 milliseconds. it executes only once */
    spaneEl.remove();
  }, 3000);
});
