let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#plusFifteen').addEventListener('click', plusFifteen)
document.querySelector('#minusThirty').addEventListener('click', minusThirty)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plusFifteen() {
  total = total + 15
  document.querySelector('#placeToPutResult').innerHTML = total
}

function minusThirty() {
  total = total - 30
  document.querySelector('#placeToPutResult').innerHTML = total
}
