let box = document.querySelectorAll(".box");
let resetbtn = document.querySelector("button");
let message = document.querySelector(".message");
let scoreX = 0;
let scoreO = 0;
let sx = document.querySelector("#score1");
let so = document.querySelector("#score2");
let tie = document.querySelector("#tie");
let newbtn = document.querySelectorAll("button");
let t = 0;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let playert = document.querySelector(".playername");
let turn1 = true;
box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn1) {
            box.innerText = "X";
            box.style.color = "rgb(43, 207, 239)";
            // box.style.border = "1px solid black";
            turn1 = false;
            playert.innerText = "O turn";
        }
        else {
            box.innerText = "O";
            turn1 = true;
            box.style.color = "goldenrod";
            // box.style.border = "1px solid black";
            playert.innerText = "X turn";
        }
        checkWinner();
        if (isFull()) {
            t++;
            tie.innerText = t;
            message.innerText = `Tie between X and O`;
            setTimeout(() => {
                message.innerText = ""
            }, 1500);
            resetBox();
        }
    })
});
const isFull = () => {
    let full = true;
    for (let i = 0; i < 9; i++) {
        if (box[i].innerText == "") {
            full = false;
        }
    }
    return full;
}
const checkWinner = () => {
    for (i of winPatterns) {
        let pos1 = box[i[0]].innerText;
        let pos2 = box[i[1]].innerText;
        let pos3 = box[i[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showWinner(pos1);
                resetBox();
                if (pos1 == 'X') {
                    scoreX++;
                    sx.innerText = scoreX;

                }
                else {
                    scoreO++;
                    so.innerText = scoreO;
                }
            }
        }
    }
}


const showWinner = (pos1) => {
    message.innerText = `Winner is player ${pos1}`;
    setTimeout(() => {
        message.innerText = ""
    }, 1500);

}
const resetBox = () => {
    setTimeout(() => {
        box.forEach((box) => {
            box.innerText = "";
        })
    }, 200
    )
}
resetbtn.addEventListener("click", resetBox);

newbtn[1].addEventListener("click", () => {
    box.forEach((box) => {
        box.innerText = "";
    });
    so.innerText = "0";
    sx.innerText = "0";
})