// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}


function greet () {
  // TODO: Write your code here

  const name = prompt('What is your name, user?')
  if (!name) {
    render("<h1> This is blank type your name </h1>")
    return ("<p> Good day, ${name} </p>")
  }
}

/* 
  Function 2 — averageNumbers()
  ------------------------------

*/
function averageNumbers() {
  const numbers = window
    .prompt("Input a list of comma separated numbers")
    ?.split(",")
    ?.map((n) => parseFloat(n.trim()))
    ?.filter((e) => isNaN(e) === false && e !== Math.E);
  if (numbers) {
    const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    render(`<p>Average: ${avg}</p><ul id="LIOPT" class="list-group"></ul>`);
/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  const h = new Date().getHours();
  let message = "";
  if (h < 12) message = "Good morning, User";
  else if (h < 18) message = "Good Day, User!";
  else message = "Good Night, User!";
    render(`<p>${message}</p>`);




}

 
function randomBetween () 
  const min = parseInt(prompt('Enter a minimum number:'))
  const max = parseInt(prompt('Enter a maximum number'))

  if(isNaN(min) || isNaN(max)){
    render(`Please provide REAL numbers thank you`)
    return
  }

  if(min >= max){
    render(`your minimum should not be more than your max dummy`)
    return
  }

  const rndNum = Math.random() * (max - min + 1)
  render(rndNum)

}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

/* 
  ------------------------------------------
 