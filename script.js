let numberOfSquares = prompt("How many squares on each side? (in pixels) \n*Leave the input empty for default.\nthe default is a square of range 192~288px");
let container = document.querySelector(".container");
console.log(numberOfSquares)
let boxSize = 0;
let counter = 0;
let content = document.createElement("div");
container.appendChild(content);
content.style.backgroundColor = "White";
content.style.display = "flex";
content.style.border = "solid black"

if (numberOfSquares === "") {
    content.style.width = "500px";
    content.style.height = "500px";
    content.style.padding = "0";
    boxSize = (0.04 * 500);
    counter = 500 / boxSize;
} else {
    content.style.width = numberOfSquares + "px";
    content.style.height = numberOfSquares + "px";
    content.style.padding = "0";
    boxSize = (0.04 * numberOfSquares);
    counter = numberOfSquares / boxSize;
}


console.log(boxSize);
console.log(counter);

content.style.display = "flex";
content.style.flexDirection = "row";
content.style.flexWrap = "wrap";       
content.style.alignContent = "flex-start";
for (let i = 0; i < (counter*counter); i++) {
    
    let box = document.createElement("div");
    box.setAttribute("id", "box");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.boxSizing = "border-box";
    box.style.border = "1px solid black";
    box.style.backgroundColor = "white";
    box.dataset.locked = "false";

    box.addEventListener("mouseenter", () => {
        if (box.dataset.locked !== "true") {
        box.style.backgroundColor = "#FFFFC4";
        }
    });
    

    box.addEventListener("mouseleave", () => {
        if (box.dataset.locked !== "true") {
        box.style.backgroundColor = "white";
        }
    });

    box.addEventListener("click", () => {
        box.dataset.locked = "true";
        box.style.backgroundColor = "black";
    });
    
    content.appendChild(box);

}

let coloured = document.getElementById("box");

