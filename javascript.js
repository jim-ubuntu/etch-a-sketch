let container = document.createElement("div");
container.style.display = "flex";
let gridSize = 0;
const newCanvasButton = document.createElement("button");
newCanvasButton.textContent = "New Grid (size < 100)";
newCanvasButton.addEventListener("click", () => {
    container.innerHTML = "";
    gridSize = prompt("Enter the grid size (must be < 100)");
    createGrid(gridSize);
    
    });
document.body.appendChild(newCanvasButton)

function createGrid(width=16){

    if (width >100){
        return alert("Error, must be smaller than 100.")
    }

    for (let j=0;j<width;j++){
        let row = document.createElement("div");
        for (let i=0;i<width;i++){
            let newBlock = document.createElement("div");
            newBlock.style.background = "white";
            newBlock.style.width = "50px";
            newBlock.style.height = "50px";
            newBlock.addEventListener("mouseover", () => {
                newBlock.style.background = "blue";
            })

            row.appendChild(newBlock);

        
    }
    container.appendChild(row);
}
}
createGrid();
document.body.appendChild(container);
