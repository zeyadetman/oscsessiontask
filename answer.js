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

        function start() {
            document.getElementsByClassName("logo")[0].setAttribute("src", logos[index].logo);
            document.getElementById("user-try").style.color = "#fc3";
            document.getElementById("user-try").style.borderBottom = "2px solid #fc3";
            document.getElementById("user-try").value = "";
            //document.getElementById("user-try").innerHTML = ""; //.toLowerCase();     
        }

        function check() {
            userInput = document.getElementById("user-try").value.toLowerCase();
            if (userInput == logos[index].brand) {
                document.getElementById("user-try").style.color = "green";
                document.getElementById("user-try").style.borderBottom = "2px solid green";
                index++;
                if (index == logos.length) {
                    var x = confirm("Do you want to play again");
                    if (x) {
                        index = 0;
                        score = 0;
                        document.getElementsByClassName("scor-count")[0].innerHTML = "0";
                        start();
                    } else {
                        alert(`Your score is ${score}`);
                    }
                }
                index = (index) % logos.length;
                // console.log(index);
                score += 5;
                document.getElementsByClassName("scor-count")[0].innerHTML = score.toString();
                setTimeout(start, 2000);
            } else {
                //wrong
                document.getElementById("user-try").style.color = "red";
                document.getElementById("user-try").style.borderBottom = "2px solid red";
            }
        }
        start();
