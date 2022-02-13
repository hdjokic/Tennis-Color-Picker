let dontRepeatDays = true;
let dontDoubleRed = true;
let isRed = false;
let prevRowColorCellOne = null;
let prevRowColorCellTwo = null;
let currColors = ["",""];
let rerun = true;
let prevColors = ["",""];
let tempColor="";

function generateColor(dontInclude, dontInclude2) {
    let availableColors = ["red", "blue", "black", "white"];

    availableColors = availableColors.filter(color => color !== dontInclude);
    availableColors = availableColors.filter(color => color !== dontInclude2);
    let color = availableColors[Math.floor(Math.random() * availableColors.length)];

    return color;
}

function recolorCell() {
    const table = document.querySelector("table");
    for (let i = 1; i < table.rows.length; i++) {
        while((JSON.stringify(currColors) === JSON.stringify(prevColors)) || rerun){
            console.log(JSON.stringify(currColors) === JSON.stringify(prevColors));
            prevColors = currColors.slice();
            rerun=false;
            
            for (let j = 1; j < table.rows[i].cells.length; j++) {

                if (table.rows[i].cells[1].style.backgroundColor === "red") {
                    tempColor = generateColor("red", "blue");
                }
                else if (table.rows[i].cells[1].style.backgroundColor === "blue"){
                    tempColor = generateColor("red")
                } else {
                    tempColor = generateColor();
                }
                table.rows[i].cells[j].style.backgroundColor = tempColor;

                currColors[j - 1] = tempColor;

            }

            console.log("Prev" + JSON.stringify(prevColors));
            console.log("Curr" + JSON.stringify(currColors));
        }

        rerun=true;
    }
}


//console.log(generateColor())