var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var zwaardButton = document.getElementById("button3");
var boogButton = document.getElementById("button4");
var description = document.getElementById("description");
var character = document.getElementById("character")
var enemy = document.getElementById('enemy');
var bg = document.getElementById("bgimg");
var zwaard = document.getElementById("zwaard");
var wapen = {"zwaard": false, "boog": false}

function start() {
    console.log("Start");
    button2.style.display = "none";
    button1.innerHTML = "Start";
    description.innerHTML = 'Welkom bij Undefeated, klik op Start.';
    button1.onclick = lvl1;
};

function lvl1() {
    console.log("lvl1");
    button2.style.display = "inline-block";
    description.innerHTML = "Je word wakker in een lege kamer met een deur, je ziet een zwaard op de grond liggen";
    button1.innerHTML = "Pak zwaard op en loop door deur";
    button1.onclick = function wapentrue() {
        wapen["zwaard"] = true;
        lvl2();
    };
    button2.innerHTML = "Pak zwaard niet op en loop door deur";
    button2.onclick = lvl2;
}

function lvl2() {
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    console.log("lvl2");
    enemy.style.visibility = "visible";
    description.innerHTML = "Je loopt door de deur en ziet een goblin midden in de kamer staan, het lijkt erop dat hij wilt aanvallen. Je hebt geen keus, je moet terugvechten";
    button1.innerHTML = "Vecht";
    button2.style.display = "none";
    button1.onclick = function sword() {
        if (wapen["zwaard"] == true) {
            button1.style.visibility = "hidden"
            button2.style.visibility = "hidden"
            description.innerHTML = "je hebt de goblin kunnen vermoorden met je zwaard, je ziet aan het eind van de kamer nog een deur, je gaat naar binnen.";
            setTimeout(function(){lvl3();}, 5000);
         }
        else if (wapen["zwaard"] == false) {
            description.innerHTML = "je hebt geen zwaard, je kan niet terugvechten, de goblin valt aan en vermoord je.";
            setTimeout(function(){GameOver();}, 5000);
            button1.style.visibility = "hidden"
            button2.style.visibility = "hidden"
        };
    };
    
};

function lvl3() {
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    console.log("lvl3");
    enemy.src = "images/M16.png";
    description.innerHTML = "Je loopt de kamer in en ziet een mens met een M16 staan, vlucht je of vecht je?";
    button1.innerHTML = "Vlucht";
    button2.style.display = "inline-block";
    button2.innerHTML = "Vecht";
    button1.onclick = function lvl3W() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je vlucht snel langs het mens en rent door de deur, je hebt het overleefd";
        setTimeout(function(){lvl4();}, 5000);
    };
    button2.onclick = function lvl3L() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "Je probeert het mens aan te vallen maar het mens schiet je neer met hun M16."
        setTimeout(function(){GameOver();}, 5000);
    };

};

function lvl4() {
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    console.log("lvl4");
    enemy.src = "images/knifelvl4.png";
    description.innerHTML = "je bent net de kamer in gerent en ziet daar een mens met een mes staan. het is duidelijk dat je geen andere keus hebt dan vluchten of vechten.";
    button1.onclick = function lvl4L() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je probeert langs het mens te vluchten maar zij zijn sneller dan jouw, ze steken je neer.";
        setTimeout(function(){GameOver();}, 5000);
    };
    button2.onclick = function lvl4W() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je vecht met het mens, omdat jij een zwaard hebt en hij een mes steek je hem van een afstand neer, je hebt gewonnen. je loopt door de volgende deur";
        setTimeout(function(){lvl5();}, 5000)
    };
};

function lvl5() {
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    console.log("lvl5");
    enemy.src = "images/sleepingbull.png";
    description.innerHTML = "je ziet in de kamer een stier liggen, gelukkig voor jouw, de stier slaapt.";
    button1.onclick = function lvl5L() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        enemy.src = "images/awakebull.png"
        description.innerHTML = "je probeert langs de stier te vluchten maar de stier word wakker en haalt je in, de stier vermoord je.";
        setTimeout(function(){GameOver();}, 5000);
    };
    button2.onclick = function lvl5W() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je steekt de stier neer in zijn slaap en loopt door de volgende deur";
        setTimeout(function(){lvl6();}, 5000);
    };
};

function lvl6(){
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    console.log("lvl6");
    enemy.src = "images/rabbit.png";
    setTimeout(function(){
        enemy.src="images/rabbitmonster.png"
    }, 2200);
    description.innerHTML = "je ziet een schattig konijn in het midden van de kamer, je wilt het konijn aaien maar ineens verandert het konijn in een bloeddorstig beest.";
    button1.onclick = function lvl6W() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "het beest is langzaam en het lukt je om erlangs te vluchten, je rent door de deur";
        setTimeout(function(){lvl7();}, 5000);
    };
    button2.onclick = function lvl6L() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je probeert het beest te vechten maar het beest is velen malen sterker dan jij, je word vermoord.";
        setTimeout(function(){GameOver();}, 5000);
    };
    
};

function lvl7() {
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    console.log("lvl7");
    enemy.src = "images/ogre.png";
    description.innerHTML = "in deze kamer zie een ogre. Het is duidelijk dat hij je er niet zomaar langs gaat laten.";
    button1.onclick = function lvl7L() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je probeert langs de ogre te vluchten maar de ogre zwaait zijn arm en raakt je volop, je bent dood.";
        setTimeout(function(){GameOver();}, 8000);
    };
    button2.onclick = function lvl7W() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "Je vecht met de ogre, de ogre zwaait zijn arm op de grond, je rent over de arm en over zijn arm naar zijn nek, je zwaait je zwaard tegen zijn nek en vermoord de ogre, je loopt verder door de volgende deur.";
        setTimeout(function(){lvl8();}, 10000);
    };
};

function lvl8() {
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    console.log("lvl8");
    enemy.src = "images/lvl8titan.png";
    description.innerHTML = "Je loopt de kamer in en ziet een gemuteerd gepantserd persoon";
    button1.onclick = function lvl8W() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "De gemuteerde persoon kan niet goed lopen, je rent langs hem door de deur.";
        setTimeout(function(){lvl9();}, 5000);
    };
    button2.onclick = function lvl8L() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je zwaard kan geen schade doen tegen het pantser, het gemuteerde mens vermoord je.";
        setTimeout(function(){GameOver();}, 5000);
    };
};

function lvl9() {
    button1.style.visibility = "visible"
    button2.style.visibility = "visible"
    bg.src = "images/golddoor.jpg";
    console.log("lvl9");
    enemy.src = "images/lvl9.png";
    description.innerHTML = "Je ziet een robot in de kamer staan, de robot is bewapend.";
    button1.onclick = function lvl9L() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je probeert te vluchten maar de robot schiet je neer.";
        setTimeout(function(){GameOver();}, 5000);
    };
    button2.onclick = function lvl9W() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je gooit je zwaard naar de robot en het zwaard raakt de batterij van de robot, de robot valt neer. Je loopt door de volgende deur, deze deur is goud.";
        setTimeout(function(){lvl10();}, 7000);
    }
};

function lvl10() {
    button1.style.visibility = "visible"
    button2.style.visibility = "hidden";
    bg.src = "images/lvl10.jpg";
    console.log("lvl10");
    enemy.src = "images/dragon.png";
    description.innerHTML = "In de kamer door de gouden deur vind je een slapende draak, de draak word wakker en spuwt vuur de lucht in, het lijkt erop dat je de draak zal moeten vechten.";
    button1.innerHTML = "Volgende";
button1.onclick = function volgende() {
        button2.style.visibility = "visible";
        description.innerHTML = "de draak begint met aanvallen, je ontwijkt alles en vind een boog op de vloer liggen, pak je de boog op?";
        button1.innerHTML = "Pak de boog op.";
        button2.innerHTML = "Pak de boog niet op.";
    button1.onclick = function pakboog() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
            description.innerHTML = "je pakt de boog op, de draak valt aan, je ontwijkt, de draak zijn klauw zit vast in de grond, dit is je kans, je schiet een pijl van je boog naar het hoofd van de draak, de pijl raakt de hersenen van de draak en de draak valt dood neer, je hebt gewonnen.";
            button1.innerHTML = "Volgende";
            button2.style.visibility = "hidden";
        button1.onclick = setTimeout(function(){vrijheid();}, 10000);
        };

    button2.onclick = function pakboogniet() {
        button1.style.visibility = "hidden"
        button2.style.visibility = "hidden"
        description.innerHTML = "je pakt de boog niet op, de draak valt aan, je ontwijkt, de draak zijn klauw zit vast in de grond, dit is je kans, je rent naar de draak maar voordat je dichtbij genoeg bent om aan te vallen heeft de draak zijn klauw uit de grond gehaald en vermoord je met zijn klauw.";
            setTimeout(function(){GameOver();}, 10000);
        };
    };
};

function vrijheid() {
    console.log("vrijheid");
    bg.src = "images/freedom.jpg";
    description.innerHTML = "je loopt door de deur en je ziet een prachtig landschap, je hebt gewonnen. Je bent vrij.";
    character.style.display = "none";
    enemy.style.display = "none";
    button1.style.visibility = "visible";
    button1.style.display = "inline-block";
    button2.style.display = "none";
    button1.innerHTML = "Restart";
    button1.onclick = function refresh2() {
        window.location.reload();
    };
};

function GameOver() {
    console.log("GameOver");
    bg.src = "images/gameover.jpg";
    character.style.display = "none";
    enemy.style.display = "none";
    description.innerHTML = "Je bent dood.";
    button1.style.display = "inline-block";
    button2.style.display = "none";
    button1.innerHTML = "Restart";
    button1.onclick = function refresh() {
        window.location.reload();
    };
};

start();


