//Modell
let optionOne = '____';
let optionTwo = '____';
let optionThree = '____';
let optionFour = '____';

//View
updateView()
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="storyDiv">
        <div>There was a </div><div id="wordOptionOne"> ${optionOne} </div>
            <div id="wordOptionTwo"> ${optionTwo} </div><div>that</div>
            <div id="wordOptionThree"> ${optionThree} </div><div>into a</div> 
            <div id="wordOptionFour"> ${optionFour}</div>
            <div>, it was a great adventure. The End</div>
        </div>
    </div>
    <br />

    <div id="option1">
        <button id="divToClick" onclick="addWord1(innerHTML)">Brown</button>
        <button id="divToClick" onclick="addWord1(innerHTML)">Black</button>
    </div>
    <div id="option2">
        <button id="divToClick" onclick="addWord2(innerHTML)">Dog</button>
        <button id="divToClick" onclick="addWord2(innerHTML)">Cat</button>
    </div>
    <div id="option3">
        <button id="divToClick" onclick="addWord3(innerHTML)">Crashed</button>
        <button id="divToClick" onclick="addWord3(innerHTML)">Jumped</button>
    </div>
    <div id="option4">
        <button id="divToClick" onclick="addWord4(innerHTML)">Wall</button>
        <button id="divToClick" onclick="addWord4(innerHTML)">Puddle</button>
    </div>
    `;
}


//Controll
function addWord1(innerHTML) {
    optionOne = innerHTML;
    document.getElementById("wordOptionOne").innerHTML = `${optionOne}`;
}

function addWord2(innerHTML) {
    optionTwo = innerHTML;
    document.getElementById("wordOptionTwo").innerHTML = `${optionTwo}`;
}

function addWord3(innerHTML) {
    optionThree = innerHTML;
    document.getElementById("wordOptionThree").innerHTML = `${optionThree}`;
}

function addWord4(innerHTML) {
    optionFour = innerHTML;
    document.getElementById("wordOptionFour").innerHTML = `${optionFour}`;
}

updateView()