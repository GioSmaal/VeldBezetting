window.onload = load;

function load() { 
    var blocks = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 
    'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']
    var countX = 35;
    var countY = 2;

    var squad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
        

    for (var j = 0; j < blocks.length; j++) { //background colored blocks
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

    for (var i = 0; i < squad.length; i++) { //player dots
        var position = document.createElement("div");
        
        position.id = "player" + squad[i];

        position.style.width = "35px";
        position.style.height = "35px";
        position.style.borderRadius = "50%";

        position.style.background = "blue";
        position.style.color = "white";
        position.style.zIndex = "3";

        var fieldNumber = document.createTextNode(squad[i]);
        position.appendChild(fieldNumber);
        document.getElementById("players").appendChild(position);

    } 

    var selectedPlayer;
    console.log(numbers.value);
    selectedPlayer = document.getElementById(numbers.value);

    selectedPlayer.onmousedown = function(event) {
        selectedPlayer = document.getElementById(numbers.value);
        // (1) prepare to moving: make absolute and on top by z-index
        selectedPlayer.style.position = 'absolute';
        selectedPlayer.style.zIndex = 1000;
    
        // move it out of any current parents directly into body
        // to make it positioned relative to the body
        document.body.append(selectedPlayer);
    
        // centers the selectedPlayer at (pageX, pageY) coordinates
        function moveAt(pageX, pageY) {
            selectedPlayer.style.left = pageX - selectedPlayer.offsetWidth / 2 + 'px';
            selectedPlayer.style.top = pageY - selectedPlayer.offsetHeight / 2 + 'px';
        }
    
        // move our absolutely positioned selectedPlayer under the pointer
        moveAt(event.pageX, event.pageY);
    
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
    
        // (2) move the selectedPlayer on mousemove
        document.addEventListener('mousemove', onMouseMove);
    
        // (3) drop the selectedPlayer, remove unneeded handlers
        selectedPlayer.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            selectedPlayer.onmouseup = null;
        };
  
  };

}


