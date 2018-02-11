var userInput = "";
        var index = 0,
            score = 0;
        var logos = [{
            "brand": "bmw",
            "logo": "1b.jpg"
        }, {
            "brand": "samsung",
            "logo": "1s.jpg"
        }, {
            "brand": "dell",
            "logo": "1d.jpg"
        }, {
            "brand": "nike",
            "logo": "1n.jpg"
        }, {
            "brand": "uber",
            "logo": "1u.jpg"
        }, {
            "brand": "at&t",
            "logo": "1a.png"
        }, {
            "brand": "playstation",
            "logo": "1p.jpg"
        }, ];

function start(index,score) {
    document.getElementsByClassName("logo")[0].setAttribute("src", logos[index].logo);
    document.getElementById("user-try").style.color = "#fc3";
    document.getElementById("user-try").style.borderBottom = "2px solid #fc3";
    document.getElementById("user-try").value = ""; 
    document.getElementsByClassName("scor-count")[0].innerHTML = score.toString();
}

function check() {
    userInput = document.getElementById("user-try").value.toLowerCase();
    console.log(index);
    if (userInput == logos[index].brand) {
            document.getElementById("user-try").style.color = "green";
            document.getElementById("user-try").style.borderBottom = "2px solid green";
            index++;
            if (index == logos.length) {
                    alert("Wow! You solved all logos! ");
                    gameOver(score);
                    start(0,0);
                }
                index = (index) % logos.length;
                // console.log(index);
                score += 5;
                document.getElementsByClassName("scor-count")[0].innerHTML = score.toString();
                setTimeout(start, 1000);
                start(index,score);
            } else {
                //wrong
                document.getElementById("user-try").style.color = "red";
                document.getElementById("user-try").style.borderBottom = "2px solid red";
                alert("Ooh! it's gameOver! ");                
                gameOver(score);
                start(0,0);
            }
}
start(index,score);

function gameOver(pScore){
    var player = prompt("write your name");
    localStorage.setItem(player,pScore);
    index=0;
    score=0;
}