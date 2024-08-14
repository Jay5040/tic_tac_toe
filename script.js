let boxes = document.querySelectorAll('.box');
console.log(boxes);
let resetBtn = document.getElementById('Reset');
console.log(resetBtn)

let turno = true;
let turnx = false;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerHTML;
        let position2 = boxes[pattern[1]].innerHTML;
        let position3 = boxes[pattern[2]].innerHTML;

        if(position1 !== "" || position2 !== "" || position3 !== "" )
        if (position1 === position2 && position1 === position3) {
            let winImg = document.getElementById('winImg');
            winImg.style.display = "block"
            let Winner = document.getElementById('Winner')
            Winner.innerHTML = ("Winner is: " + position1)
            console.log(boxes[pattern[0]].style.backgroundColor = "red");
            console.log(boxes[pattern[1]].style.backgroundColor = "red");
            console.log(boxes[pattern[2]].style.backgroundColor = "red");
            break;      
        }
    }
};
resetBtn.addEventListener('click' , () => {
    boxes.forEach((box) => {
        box.innerHTML = ""
        box.style.backgroundColor = "white"
        box.style.backgroundColor = "white"
        box.disabled = false;
    }) 
})

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click");
        if (turno) {
            box.innerHTML = "O";
            turno = false;
            turnx = true;
        } else {
            box.innerHTML = "X";
            turno = true;
            turnx = false;
        }
        box.disabled = true;
        checkWinner();
    });
});