var textInput = document.querySelector('#text-input');
var textOutput = document.querySelector('.output-div');
var btnTranslate = document.querySelector("#translate-button");
var btnReset = document.querySelector('#reset-button');

var serverURL = "https://lessonfourapi.r4k3sh.repl.co/translate/minion.json?text="


function getUrl(input){
    console.log(serverURL+input);
    return serverURL+input;
    
}

function reset (){
    textInput.value ='';
    textOutput.innerText = '';
}




function clickHandler (){
    var inputText = textInput.value;

     fetch(getUrl(inputText))
    .then(response=>response.json())
    .then(json=>{
        outputText = json.contents.translated;
        outputHtml = `<p><mark>${outputText}</mark></p>`;
        textOutput.innerHTML=outputHtml;
        // textOutput.innerText = outputText;
        console.log(outputText);
    })
    
};

btnTranslate.addEventListener("click",clickHandler);
btnReset.addEventListener("click",reset);

