function generateColor() {
    let availableColors = ["red", "blue", "black", "white"];
    let color = availableColors[Math.floor(Math.random() * 4)];
    let color2 = availableColors[Math.floor(Math.random() * 4)];


    return color;
}

function recolorCell() {
    const table = document.querySelector("table");
    for (let i = 1; i < table.rows.length; i++) {
        for (let j = 1; j < table.rows[i].cells.length; j++) {
            (table.rows[i].cells[j]).style.backgroundColor = generateColor()
        }
    }
}


console.log(generateColor())