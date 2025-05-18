let isOn;
////////event listeners
document.getElementById("number").
    addEventListener("change", function(){
        change();
    }
)
document.getElementById("scale").
    addEventListener("input", function(){
        change();
    }
)
document.getElementById("spin").
    addEventListener("input", function(){
        change();
    }
)

change();

///////////functions
function summonBoxes(nbOfBoxes, scale, spin){
    for(let i=0; i<nbOfBoxes; i++){
        let boxes = document.querySelectorAll('.box');
        let box = boxes[(boxes.length - 1)]
        
        //classes
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        
        //ajust size
        newBox.style.transform = `scale(${scale})`;
        newBox.style.rotate = `${spin}deg`;
        box.append(newBox);
    }
}

function change(){  
    let num = document.getElementById("number");
    let sca = document.getElementById("scale");
    let spin = document.getElementById("spin");
    max = 500;
    min =1
    if(num.value>max){num.value = max;}
    if(num.value<min){num.value = min;}

    if(!isOn){
        document.querySelector('.box.init').innerHTML = "";
        summonBoxes(num.value, sca.value/100, spin.value/100*360);
    }
}