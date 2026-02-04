let emoji = ["😀","😂","😍","🤩","😎","🥳","🤨","🫨","🥵","💀","👻","🤖","🤕","👺","😈"];
let btn = document.querySelector('.gen-btn');
btn.addEventListener('click', generateEmoji);

let emojiDisplay = document.querySelector('.emoji-display');

let randomColor = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let color = "#";
let emojiArray = document.querySelector('.emoji-array');

function generateEmoji() {
    emojiIndex = Math.floor(Math.random() * emoji.length);
    emojiDisplay.textContent = emoji[emojiIndex];
    let box = document.querySelector('.mystery-box');

    let emojiDiv = document.createElement('div');
    emojiDiv.innerText = emoji[emojiIndex];
    emojiDiv.style.fontSize = "2rem";
    emojiArray.appendChild(emojiDiv);

    emojiDiv.addEventListener('click', function(){
        navigator.clipboard.writeText(emojiDiv.innerText);
        alert("Emoji " + emojiDiv.innerText + " copied to clipboard!");
    });

    box.style.animation = "flip 0.5s ease-in-out";
    // box.style.transform = "rotateY(180deg)";
    box.style.backgroundColor = "red";
    let card = document.querySelector('.card');
    card.style.backgroundColor = generateRandomColor();
    color = "#";
}

function generateRandomColor(){
    for(let i=0; i<6; i++){
        let index = Math.floor(Math.random() * randomColor.length);
        color += randomColor[index];
    }
    return color;
}