
let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");


let outputDiv = document.querySelector("#output")

let serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?text=" + text
}

function errorHandler(){

    console.log("error occured", error)
}


function clickEventHandler(){
  
let inputText = txtInput.value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => 
    outputDiv.innerText=json.contents.translated
    )


.catch(errorHandler)
} 

// console.log(txtInput)

btnTranslate.addEventListener("click",clickEventHandler)

