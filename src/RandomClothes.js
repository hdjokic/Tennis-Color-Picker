let dontRepeatDays = true;
let dontDoubleRed = true;
let isRed = false;
function generateColor(dontInclude) {
    let availableColors = ["red", "blue", "black", "white"];

    availableColors = availableColors.filter(color => color != dontInclude);
    let color = availableColors[Math.floor(Math.random() * 4)];

    return color;
}

function recolorCell() {
    const table = document.querySelector("table");
    for (let i = 1; i < table.rows.length; i++) {
        for (let j = 1; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].style.backgroundColor = generateColor()
            if(table.rows[i].cells[1].style.backgroundColor==="red"){
                table.rows[i].cells[j].style.backgroundColor = generateColor("red")

            }
        }
    }
}


console.log(generateColor())