document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day === 'Saturday' || day === 'Sunday') {
    document.querySelector('#placeToSee').innerText = "It's the WEEKEND!!!!!"
  }

  else if (day === 'Tuesday' || day === 'Thursday') {
    document.querySelector('#placeToSee').innerText = "GET CRUNK IT'S CLASS TIME!!!!"
  }

  else {
    document.querySelector('#placeToSee').innerText = "Bruh, today sucks."
  }


}
