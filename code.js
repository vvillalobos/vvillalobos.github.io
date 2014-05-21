function himine() {
	$("#mine").html("I actually don't own any pets.");
        $("#mine").show();
        }
      
function changeColor() {
        //changes header to red and add border
        $(".one").css("color", "white");
        }

function changeColor2() {
        //changes header to red and add border
        $(".one").css("color", "blue");
        }
function game() {	
		var number = Math.floor(Math.random()*11)
                var a = prompt("Welcome to the Guessing Game! Guess a number between 1-10");
                while (a != number) {
                   if ( a < number) {
                        var a = prompt("Guess too low. Guess again!");
                   }
                   else {
                        var a = prompt("Guess too high. Guess again!");
                   }
                };
                if ( a == number) {
                        alert("YOU WON.");
                }
}
