var wordArray =[];
// define what should happen when click
startBtn.addEventListener("click",startHandler,false);
swapbtn.addEventListener("click",swaptHandler,false);

function startHandler(){
    var ul = document.querySelector("#ulid");
    for (let index = 0; index < 3; index++) {
        wordArray[index] = prompt("enter word");
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(wordArray[index]));
        ul.appendChild(li);
    }
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('swapbtn').style.display = 'block';
}
function swaptHandler(){
    page1.style.display = "none";
    page2.style.display = "block";
    var ul = document.querySelector("#ulid2");
    const newArr = wordArray.map(toSwap)
    for (let index = 0; index < newArr.length; index++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(newArr[index]));
        ul.appendChild(li);
    }
    swapbtn.style.display = "none";
}
function toSwap (oneWord){

    return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
}