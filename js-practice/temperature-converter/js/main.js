//Write your pseduo code first! 

document.querySelector('#convertButton').addEventListener('click', convertTemp)

//Take initial input as input value
//Run conversion formula on input variable
//Put converted variable into DOM
function convertTemp(){
    let temp = document.querySelector('#temp').value
    temp = temp/5 * 9 + 32
    document.querySelector('#convertedTemp').innerText = temp.toFixed(1)
}

