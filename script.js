var randomNumber;
var theNumber;
var attempts = 10;
var item = document.getElementById("ans_block").value;
var answer = parseInt(item);

function attemptLeft()
{
    attempts--;
}

function attemptLeftText()
{
    if (attempts == 1)
    {
        document.getElementById("attemptLeft").innerHTML = "Attention ! Il te reste "+attempts+" essai.";
    }
    else
    {
        document.getElementById("attemptLeft").innerHTML = "Il te reste "+attempts+" essais.";
    }
}

function assignNumber () {
    randomNumber = (Math.random())*100;
    theNumber = Math.ceil(randomNumber);
    return theNumber;
}

function testAnswer()
{
    item = document.getElementById("ans_block").value;
    answer = parseInt(item);
    return answer;
}
// début du jeu

assignNumber();
attemptLeftText();
document.getElementById("submit").addEventListener("click", function() {
    if (attempts>1)
    {
        testAnswer();
        if(answer === theNumber)
        {
            document.getElementById("hint").innerHTML = "<span style='color: #39de84 '>\"YEAH BABY !! T'as gagné.\"</span>";
            document.getElementById("attemptLeft").innerHTML = ""
            document.getElementById('submit').style.visibility = "hidden";
            document.getElementById("restart").style.display = "block";
            document.getElementById("idmagique").innerHTML="Tu as déjà joué les nombres :";
            document.getElementById("idmagique").style.display="none";
            document.getElementById("ans_block").value="";

        }
        else if (answer < theNumber) {
            var r = testAnswer();
            attemptLeft();
            attemptLeftText();
            document.getElementById("hint").innerHTML = "<span id ='hinttexte' style='color: #b0c4de '>C'EST PLUS !</span>";
            document.getElementById("idmagique").style.display= "block";
            document.getElementById("idmagique").innerHTML+=" "+answer+",";

        }
        else if (answer > theNumber)
        {
            var r = testAnswer();
            attemptLeft();
            attemptLeftText();
            document.getElementById("hint").innerHTML = "<span id ='hinttexte' style='color: #FF8C00 '>C'EST MOINS !</span>";
            document.getElementById("idmagique").style.display= "block";
            document.getElementById("idmagique").innerHTML+=" "+answer+",";
        }
    }
    else{
        document.getElementById('submit').style.visibility= "hidden";
        document.getElementById("hint").innerHTML =
            "Oh non ! Tu as perdu.<br>Il fallait trouver "+theNumber;
        document.getElementById("attemptLeft").innerHTML = ""
        document.getElementById("restart").style.display = "block";
        document.getElementById("idmagique").innerHTML="Tu as déjà joué les nombres :";
        document.getElementById("idmagique").style.display="none";
        document.getElementById("ans_block").value="";
    }
});

document.getElementById('restart').addEventListener("click", function (){
    attempts = 10;
    document.getElementById("attemptLeft").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    document.getElementById('submit').style.visibility= "visible";
    assignNumber();
    attemptLeftText();
    document.getElementById("ans_block").innerHTML = "";
    document.getElementById('submit').style.visibility = "visible";
    document.getElementById('restart').style.display = "none";

    alert ("c'est reparti !! ")
})

