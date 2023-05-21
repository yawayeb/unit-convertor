/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let userInput = document.getElementById('convertInput')
let convertBtn = document.getElementById('convert-btn')
let showError = document.getElementById('errors')

let meterFeet = document.getElementById('meter-feet')
let literGallon = document.getElementById('liter-gallon')
let kiloPound = document.getElementById('kilo-pound')

convertBtn.addEventListener('click', function() {
    let num = userInput.value
    showError.textContent = ''
    
    if (num < 0) {
        showError.textContent = '* Please enter a positive number'
        meterFeet.textContent = 'waiting for your input'
        literGallon.textContent = 'waiting for your input'
        kiloPound.textContent = 'waiting for your input'
    } else {
        let feet = num * 3.281
        let meter = num / 3.281
        let liter = num / 0.264
        let gallon = num * 0.264
        let kilogram = num / 2.204
        let pound = num * 2.204

        meterFeet.textContent = `
        ${num} meters = ${feet.toFixed(3)} feet | 
        ${num} feet = ${meter.toFixed(3)} meters`

        literGallon.textContent = `
        ${num} liters = ${gallon.toFixed(3)} gallons | 
        ${num} gallons = ${liter.toFixed(3)} liters`

        kiloPound.textContent = `
        ${num} kilos = ${pound.toFixed(3)} pounds | 
        ${num} pounds = ${kilogram.toFixed(3)} kilos`
    }
})