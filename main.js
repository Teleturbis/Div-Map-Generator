document.getElementById("generate").onclick = function() {start()};
document.getElementById("clear").onclick = function() {clear()};


function start (){

    let amount = parseInt(document.getElementById("amount").value);
    let string = document.getElementById("text").value;

    let generatedString = "";

    if(string.includes("§")){

        for(let i = 0; i < amount; i++){

            generatedString = document.getElementById("result").value;

            document.getElementById("result").value = generatedString + string.replace("§", i) + "\n";

        }

    } else {

        for(let i = 0; i < amount; i++){

            generatedString = document.getElementById("result").value;
    
            document.getElementById("result").value = generatedString + string + "\n";
    
        }

    }

    

}

function clear(){

    document.getElementById("result").value = "";

}