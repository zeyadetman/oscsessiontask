var userInput = "";
        var index = 0,
            score = 0;
        var logos = [
        {
            "brand": "3ce98d8f2abaf608e7875d1c9e70032b",
            "logo": "Brands/acm.jpg"
        },{
            "brand": "bf215181b5140522137b3d4f6b73544a",
            "logo": "Brands/gh.png"
        },{
            "brand": "71913f59e458e026d6609cdb5a7cc53d",
            "logo": "Brands/1b.jpg"
        }, {
            "brand": "fe546279a62683de8ca334b673420696",
            "logo": "Brands/1s.jpg"
        }, {
            "brand": "a3d24b555bc2ee180607ef34377d8996",
            "logo": "Brands/1d.jpg"
        }, {
            "brand": "41fd220f05ed0d8c56e3b83af87d45d7",
            "logo": "Brands/1n.jpg"
        }, {
            "brand": "92553f8122d8741804f476b3a9a1423d",
            "logo": "Brands/1u.jpg"
        },
         {
            "brand": "d9eaabe53adedb62bc74b7eb0a9477d4",
            "logo": "Brands/z1 (2).jpg"
        }, {
            "brand": "2d0d4809e6bdb6f4db3e547f27b1873c",
            "logo": "Brands/z1 (1).jpg"
        }, {
            "brand": "e206a54e97690cce50cc872dd70ee896",
            "logo": "Brands/lx.png"
        },
         {
            "brand": "5deb800ce9500e72e355137ab8b48fb6",
            "logo": "Brands/1a.png"
        }, {
            "brand": "17d41a1f00e7099106e36f5f3cfb83e5",
            "logo": "Brands/1p.jpg"
        }, {
            "brand": "9d903ccd68212f85fc2e700e4733e52f",
            "logo": "Brands/1 (1).jpg"
        }, {
            "brand": "80ca06abfa1a5104af9a770f485dad07",
            "logo": "Brands/1 (1).gif"
        }, {
            "brand": "1c5442c0461e5186126aaba26edd6857",
            "logo": "Brands/1 (2).jpg"
        }, {
            "brand": "4d9fa555e7c23996e99f1fb0e286aea8",
            "logo": "Brands/1 (3).jpg"
        }, {
            "brand": "2656a9b9198a7631e0521a2582e998f5",
            "logo": "Brands/1 (4).jpg"
        }, {
            "brand": "a189c633d9995e11bf8607170ec9a4b8",
            "logo": "Brands/1 (13).png"
        }, {
            "brand": "d9f32436125b47e03d11fbf1fa62424a",
            "logo": "Brands/1 (15).png"
        }, {
            "brand": "02111f51fea0287f0e41e9e2179376bf",
            "logo": "Brands/1 (16).png"
        }, {
            "brand": "230c5c9d495e3bf392ef2b8098e51921",
            "logo": "Brands/1 (11).png"
        }, {
            "brand": "5e29580010e4cbfb535c518a579f23c7",
            "logo": "Brands/1 (5).png"
        }, {
            "brand": "2f729745c8d7d5cfaccd9a8db7946547",
            "logo": "Brands/1 (14).png"
        }, {
            "brand": "1f2a4b730dc533366115ba7f5168b074",
            "logo": "Brands/1 (10).jpg"
        }, {
            "brand": "67c6da9296e9842803694662f1db8b88",
            "logo": "Brands/1 (12).png"
        }, {
            "brand": "b6a6737ef0ccfbf6d4d1afddc7829b33",
            "logo": "Brands/1 (7).png"
        }, {
            "brand": "69739ce1e2403749d3474ad13a94fe17",
            "logo": "Brands/1 (9).jpg"
        }, {
            "brand": "c1aafc7e23f24ba11aae492f5caa2d97",
            "logo": "Brands/1 (8).png"
        }
];

function start(index,score) {
    if(index != undefined)
    {document.getElementsByClassName("logo")[0].setAttribute("src", logos[index].logo);
    document.getElementById("user-try").style.color = "#fc3";
    document.getElementById("user-try").style.borderBottom = "2px solid #fc3";
    document.getElementById("user-try").value = ""; 
    document.getElementsByClassName("scor-count")[0].innerHTML = score.toString();}
}

function check() {
    userInput = document.getElementById("user-try").value.toLowerCase();
    //console.log(index);
    if (md5(userInput).toString() == logos[index].brand) {
            document.getElementById("user-try").style.color = "green";
            document.getElementById("user-try").style.borderBottom = "2px solid green";
            index++;
            if (index == logos.length) {
                    alert("Wow! You solved all logos! ");
                    gameOver(score);
                    score-=5;
            }
            index = (index) % logos.length;
            // console.log(index);
            score += 5;
            document.getElementsByClassName("scor-count")[0].innerHTML = score.toString();
            setTimeout(start, 1000);
            start(index,score);
    } 
    else {
            //wrong
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
    document.getElementById('scoreslist').innerHTML = "";
    listFiller(window.localStorage);
}

document.onkeydown = function (e) {
  e = e || window.event;
  switch (e.which || e.keyCode) {
        case 13 : 
            document.getElementsByClassName("control-btn")[0].click(); 
            break;
  }
}
//
//
function listFiller(arr){
    var sortedData = [];
    //console.log(arr.length);
    for (var key in arr) {
        //console.log(key, arr[key]);
        if(key != "key" && key != "getItem" && key != "setItem" && key != "removeItem" && key != "clear" && key != "length"){
            sortedData.push([key, arr[key]*1]);
        }
    }
    sortedData.sort((a,b)=>{return b[1] - a[1];});
    //console.log(sortedData);
    for(var i=0;i<sortedData.length;i++){
        document.getElementById('scoreslist').innerHTML += `<li style="padding:5px;"><img src="avatar.png" style="width:24px; height:24px; border-radius:50% !important; padding: 0 5px 0 5px;"><p style="display:inline;">${sortedData[i][0]}</p>
        <b>${sortedData[i][1]}</b></li>
        `;
    }

}

listFiller(window.localStorage);