const right = document.getElementById("right")
const left = document.getElementById("left")
const up = document.getElementById("up")
const down = document.getElementById("down")

const box = document.getElementById("box")

let positionLeft = 0
let positionTop = 0

right.addEventListener("click", () => {
  // Right Button
  positionLeft += 10 // same as positionLeft = positionLeft+10
  box.style.left = positionLeft + "px"
})

left.addEventListener("click", () => {
  // Left Button
  positionLeft -= 10 // same as positionLeft = positionLeft+10
  box.style.left = positionLeft + "px"
})

down.addEventListener("click", () => {
  //Down button
  positionTop += 10 // same as positionLeft = positionLeft+10
  box.style.top = positionTop + "px"
})

up.addEventListener("click", () => {
  //Up button
  positionTop -= 10 // same as positionLeft = positionLeft+10
  box.style.top = positionTop + "px"
})

