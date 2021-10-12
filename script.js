let numRows = 0;
let numCols = 0;
let colorSelected;



//Add a row(rows are tr tag and go down)
function addR() {
    //declare relevant variables for function(doesn't work if declared outside of function)
    let table = document.getElementById("grid")
    let col = document.createElement("td")
    let row = document.createElement("tr")
    
    //if there's no cols, append 1 tr with 1 td child(one box)
    if(numCols === 0){
        row.appendChild(document.createElement("td"))  
        table.appendChild(row)

        //if there are no rows or cols, adding one box will create a 1x1 grid, so update cols
        if(numRows === 0)
            numCols++
    }
    
    //if there are cols, append 1 td to the new row for each col
    else{
        for(let i = 0; i < numCols; i++)
            row.appendChild(document.createElement("td"))
            
        table.appendChild(row) 
    }

    numRows++
    console.log("row, col: ", numRows, numCols)
}
//Add a column(columns are td tag and go right)
function addC() {
    //declare relevant variables for function(doesn't work if declared outside of function)
    let table = document.getElementById("grid")
    let col = document.createElement("td")
    let row = document.createElement("tr")
    existingRows = document.querySelectorAll('tr')

    //if there are no rows, append 1 tr with 1 td child(one box)
    if(numRows === 0){
        row.appendChild(document.createElement("td"))  
        table.appendChild(row)

        //if there are no rows or cols, adding one box will create a 1x1 grid, so update row
        if(numCols === 0)
        numRows++
    }
    else{
        for(let i = 0; i < numRows; i++)
            existingRows[i].appendChild(document.createElement("td"))
    }
    
    numCols++
    console.log("row, col: ", numRows, numCols)
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}