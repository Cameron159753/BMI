let idealBmi = document.getElementById('IdealBmi');
let comment = document.getElementById('comment');

function myBMI(){
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    let ans = w/(h**2);
    document.getElementById("outputBmi").value = `${ans}`
    
    let age = document.getElementById('age')

    if(document.getElementById('gndr').value == 'male'){
        let ansMale = 0.5*ans + 11.5;
        idealBmi.value = `${ansMale}`
    }else if(document.getElementById('gndr').value == 'female'){
        let ansfemale = 0.5*ans + 0.03*age.value + 11;
        idealBmi.value = `${ansfemale}`
    }

    

        let height = document.querySelector('#height').value;
        let weight = document.querySelector('#weight').value;
    
        if(height == '' || weight == ''){
            alert('Please fill out the input fields!');
            return;
        }
    

    if(ans < 18){
        comment.innerText = "You are a stick"
    }else if(ans >= 18 && ans < 25){
        comment.innerText = "You are Normal"
    }else if(ans >= 25 && ans < 30){
        comment.innerText = "You are fat"
    }else{
        comment.innerText = "Get some help"
    }
    
}

function disableInput(){
    if(document.getElementById('gndr').value == 'male'){
        document.getElementById('age').disabled = true;
    }else{
        document.getElementById('age').disabled = false;
    }
    
}


function clear_inputs(){
    let inputs = document.getElementsByClassName('input')

    for(x of inputs){
        x.value = '';
    }

    document.getElementById('gndr').value = 'empty';
   
    document.getElementById("outputBmi").innerHTML = "";
    
    idealBmi.innerText = "";
    comment.innerText = "";
}

"use strict";

var ColorSwitcher = (function() {
    
    function initColorSwitcher(colorSheets) {
        var tempCon, colorSwitcher, controlBtn, colorSwitchs, linkHolderHtml, linkHolder;

        if (Object.prototype.toString.call(colorSheets) !== "[object Array]") {
            return;
        }

        tempCon = document.createDocumentFragment();
        
        colorSwitcher = document.createElement("div");
        colorSwitcher.classList.add("ColorSwitcher");

        controlBtn = document.createElement("button");
        controlBtn.classList.add("ColorSwitcher__control");

        colorSwitchs = document.createElement("div");
        colorSwitchs.classList.add("ColorSwitcher__switchs");

        linkHolderHtml = document.createElement("link");
        linkHolderHtml.rel = "stylesheet";
        linkHolderHtml.id = "ColorSwitcherLinkHolder";
        document.head.appendChild(linkHolderHtml);

        linkHolder = document.getElementById("ColorSwitcherLinkHolder");

        colorSheets.forEach(function(colorSheet, index) {
            var colorSwitch;

            if (colorSheet.color && colorSheet.title && colorSheet.href) {
                colorSwitch = document.createElement("button");

                colorSwitch.classList.add("ColorSwitcher__switch")
                colorSwitch.title = colorSheet.title;
                colorSwitch.dataset.index = index;
                colorSwitch.style.backgroundColor = colorSheet.color;
                
                colorSwitchs.appendChild(colorSwitch);
            }
        });

        colorSwitchs.addEventListener("click", function(event) {
            var index;

            if (event.target.nodeName !== "BUTTON") {
                return;
            }

            index = event.target.dataset.index;
            linkHolder.href = colorSheets[index].href

            return false;
        });

        controlBtn.addEventListener("click", function(event) {
            event.target.parentElement.classList.toggle("ColorSwitcher--open");

            return false;
        });

        colorSwitcher.appendChild(controlBtn);
        colorSwitcher.appendChild(colorSwitchs);
        tempCon.appendChild(colorSwitcher);
        document.body.appendChild(tempCon);
    }

    return {
        init: initColorSwitcher
    };
})();