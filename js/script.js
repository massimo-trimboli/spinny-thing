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

change();

///////////functions
function summonBoxes(nbOfBoxes, scale){
    for(let i=0; i<nbOfBoxes; i++){
        let boxes = document.querySelectorAll('.box');
        let box = boxes[(boxes.length - 1)]
        
        //classes
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        
        //ajust size
        newBox.style.transform = `scale(${scale})`;
        box.append(newBox);
    }
}

function change(){  
    let num = document.getElementById("number");
    let sca = document.getElementById("scale");
    max = 500;
    min =1
    if(num.value>max){num.value = max;}
    if(num.value<min){num.value = min;}

    if(!isOn){
        document.querySelector('.box.init').innerHTML = "";
        summonBoxes(num.value, sca.value/100);
    }
}

function spin(event){
    let boxes = document.querySelectorAll('.box');
    let button = event.target;
    
    //toggle anim
    for(let box of boxes){
        switch(button.innerHTML){
            case "spin":
                box.classList.add("spin");
                break;
            case "stop":
                box.classList.remove("spin");
                break;
        }
    }
    //rename button
    if(button.innerHTML == "spin"){
        button.innerHTML = "stop";
        isOn = true;
    } else{
        button.innerHTML = "spin"
        isOn = false;
        change();
    }
}