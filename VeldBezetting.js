window.onload = load;

function load() { 
    var blocks = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 
    'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']
    var countX = 35;
    var countY = 2;

    for (var j = 0; j < blocks.length; j++) { 
        var divMaker = document.createElement("div");
        
        divMaker.style.position = "absolute";
        divMaker.style.marginLeft = countX + "%";
        divMaker.style.marginTop = countY + "%";

        divMaker.style.width = "86px";
        divMaker.style.height = "134px";

        divMaker.style.opacity = "0.5";
        divMaker.style.background = "red";
        divMaker.style.border = "2px solid black";
        divMaker.style.zIndex = "2";

        document.getElementById("blocks").appendChild(divMaker);

        if (countX > 55) {
            countX = 29.3;
            countY = countY + 8.9;
        }

        countX = countX + 5.7;
    }
}