function appendValue(value){
    const display = document.getElementById("display");
    display.value += value;
    
};

function clearDisplay(){
    const remove = document.getElementById("display");
    remove.value = "";
};

function deleteLast(){
     const currentDisplay = document.getElementById("display").value;
     document.getElementById("display").value = currentDisplay.slice(0,-1);

}
function calculate(){
    try{
        let results = eval(document.getElementById("display").value);
        document.getElementById("display").value = results;
    }catch (e) {
      document.getElementById("display").value = "ERROR";
          
    }
};



