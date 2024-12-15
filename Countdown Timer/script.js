const timeInput = document.getElementById("seconds");
const startButton = document.getElementById("btn");
const countdownDisplay = document.getElementById("countdownDisplay");
const errorMessage = document.getElementById("errorMessage");
var space=1;
startButton.addEventListener("mouseover", ()=>{
    let results=parseInt(timeInput.value)
    const interval=setInterval()=>{
        results--;
        timeInput.value=results
    
    if(results===0){
        clearInterval(interval)
        errorMessage.innerText="Stop Counter"
    }
})
})


 






