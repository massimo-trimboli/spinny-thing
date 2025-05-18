///call function to create a link in the menu

addTab("animation", "index.htm");
addTab("slider", "index2.htm");
addTab("colors", "index3.htm");

function addTab(name, filePath){
    let menu = document.querySelector("header nav");

    let anchor = document.createElement("a");
    anchor.href = filePath
    menu.appendChild(anchor);

    let text = document.createElement("h3");
    text.innerText = name;
    anchor.appendChild(text);

    //determin active tab
    let location = window.location.href;
    if(location.includes(filePath)){
        anchor.classList.add("current-tab");
    }
}