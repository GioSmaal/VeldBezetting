window.onload = load;


function load() { 
    var blocks = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 
    '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']

    var countX = 153;
    var countY = 32;

    var squad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
        

    for (var j = 0; j < blocks.length; j++) { //background colored blocks
        var divMaker = document.createElement("div");

        divMaker.id = "block" + blocks[j];
        
        divMaker.style.position = "absolute";
        divMaker.style.marginLeft = countX + "px";
        divMaker.style.marginTop = countY + "px";

        divMaker.style.width = "86px";

        divMaker.style.height = "134px";

        divMaker.style.opacity = "0.5";
        divMaker.style.background = "red";
        divMaker.style.border = "2px solid black";
        divMaker.style.zIndex = "2";

        document.getElementById("blocks").appendChild(divMaker);

        if (countX > 500) {
            countX = 65;
            countY = countY + 136;
        }

        countX = countX + 88;

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
        document.getElementById("player" + squad[i]).addEventListener('mousedown', moving);
    } 


    var movingPlayer = document.getElementById(numbers.value);

    function moving(event) {

        movingPlayer = document.getElementById(numbers.value);

        if (movingPlayer.id == this.id) {
        // (1) prepare to moving: make absolute and on top by z-index
        movingPlayer.style.position = 'absolute';
        movingPlayer.style.zIndex = 1000;
    
        // move it out of any current parents directly into body
        // to make it positioned relative to the body
        document.body.append(movingPlayer);
    
        // centers the selectedPlayer at (pageX, pageY) coordinates
        function moveAt(pageX, pageY) {
            movingPlayer.style.left = pageX - movingPlayer.offsetWidth / 2 + 'px';
            movingPlayer.style.top = pageY - movingPlayer.offsetHeight / 2 + 'px';
        }
    
        // move our absolutely positioned selectedPlayer under the pointer
        moveAt(event.pageX, event.pageY);
    
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
    
        // (2) move the selectedPlayer on mousemove
        document.addEventListener('mousemove', onMouseMove);
        
        // (3) drop the selectedPlayer, remove unneeded handlers
        movingPlayer.onmouseup = function() {

            document.removeEventListener('mousemove', onMouseMove);
            movingPlayer.onmouseup = null;

            for (var k = 1; k < 25; k++) {
                movingPlayer = document.getElementById(numbers.value);
                var topValueMovingPlayer = parseInt(movingPlayer.style.top, 10); //convert text to string to compare them
                var topValueBlock = parseInt(document.getElementById('block' + [k]).style.marginTop, 10);
                var downValueMovingPlayer = parseInt(movingPlayer.style.bottom, 10);
                var heightValueBlock = parseInt(document.getElementById('block' + [k]).style.height, 10);
                var downValueBlock = topValueBlock + heightValueBlock;
                
                var leftValueMovingPlayer = parseInt(movingPlayer.style.left, 10);
                var leftValueBlock = parseInt(document.getElementById('block' + [k]).style.marginLeft, 10);
                var widthValueBlock = parseInt(document.getElementById('block' + [k]).style.width, 10);
                var rightValueBlock = leftValueBlock + widthValueBlock;

                if (topValueMovingPlayer >= topValueBlock && topValueMovingPlayer <= downValueBlock && leftValueMovingPlayer >= leftValueBlock && leftValueMovingPlayer <= rightValueBlock) { //check if this player is in any block
                
                    document.getElementById('block' + [k]).style.background = "green";
                    console.log("blue");
    
                }
    
                else {

                    for (var p = 1; p < 12; p++) {

                    movingPlayer = document.getElementById("player" + [p])
                    
                    
                    topValueMovingPlayer = parseInt(movingPlayer.style.top, 10);
                    downValueMovingPlayer = parseInt(movingPlayer.style.bottom, 10);
                    leftValueMovingPlayer = parseInt(movingPlayer.style.left, 10);

                        if (topValueMovingPlayer >= topValueBlock && topValueMovingPlayer <= downValueBlock && leftValueMovingPlayer >= leftValueBlock && leftValueMovingPlayer <= rightValueBlock) {//check if any player is in this block
                            console.log("nothing");
                            document.getElementById('block' + [k]).style.background = "green";
                            break;
                        }

                        else {
                            console.log("red");
                            document.getElementById('block' + [k]).style.background = "red";
                        }
                    }
                }


                

            }
        };

    }
  };

}


