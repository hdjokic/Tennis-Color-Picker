//let combos = []
function generateColor(dontInclude, dontInclude2) {
    let availableColors = ["red", "blue", "black", "white"];

    availableColors = availableColors.filter(color => color !== dontInclude);
    availableColors = availableColors.filter(color => color !== dontInclude2);
    let color = availableColors[Math.floor(Math.random() * availableColors.length)];

    return color;
}

function checkIfUnique(colorCombo, myCombos){
    for (let i = 0; i < myCombos.length; i++) {
        if (myCombos[i][0] === colorCombo[0] && myCombos[i][1] === colorCombo[1]){
            return false;
        }
    }
    return true;
}

function generateColors() {
    let combos = [];
    for (let i = 0; i < 7; i++){
        let colorCombo = [];
        do{
            let firstColor = generateColor();
            let secondColor;

            if(firstColor === "red"){secondColor = generateColor("red","blue")}
            else if(firstColor === "blue"){secondColor = generateColor("red")}
            else{secondColor = generateColor()}
            colorCombo = [firstColor,secondColor];
        }
        while(!checkIfUnique(colorCombo, combos)){
            combos.push(colorCombo)
        }

    }
    return combos;

}

function recolorCell(){
    let testCombos = generateColors()
    const table = document.querySelector("table");
    let k = 0;
    while (k < 7) {
        for (let i = 1; i < table.rows.length; i++) {
            //for (let j = 1; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[1].style.backgroundColor = testCombos[k][0];
            table.rows[i].cells[2].style.backgroundColor = testCombos[k][1];
            k++;
        }

    }
}


console.log(recolorCell());