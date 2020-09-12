document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here

  if (day === 'saturday' || day === 'sunday'){
    document.querySelector('#placeToSee').innerText = "It's the WEEKEND!!!!!"
  }else if (day === 'tuesday' || day === 'thursday'){
    document.querySelector('#placeToSee').innerText = "GET CRUNK IT'S CLASS TIME!!!!"
  }else if (day === 'wednesday'){
    document.querySelector('#placeToSee').innerText = "HUMPDAAAAAAAAAAY!"
  }else{
    document.querySelector('#placeToSee').innerText = "Bruh, today sucks."
  }

}
