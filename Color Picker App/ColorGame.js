var numberOfsquares = 6;
var colors = generateRandomColors(numberOfsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfsquares = 3;
    colors = generateRandomColors(numberOfsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

});

hardBtn.addEventListener("click", function(){
    
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfsquares = 6;
    colors = generateRandomColors(numberOfsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors = generateRandomColors(numberOfsquares);
    // pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "Steelblue";
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++ ){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];
     
     //add click listeners to squares
    squares[i].addEventListener("click", function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
     });
}

function changeColors (color){
    //loop thru all squares
    for(var i = 0; i < squares.length; i++){
    //change each to correct color
    squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make array
    var arr =[];
    //repeat num times
    for(var i =0; i<num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor (){
    //pick "red" 0-255
    var r = Math.floor(Math.random()*256);
    //pick "green" 0-255
    var g = Math.floor(Math.random()*256);
    //pick "blue" 0-255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}