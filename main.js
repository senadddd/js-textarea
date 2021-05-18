const area1 = document.getElementById("input-area");
const area2 = document.getElementById("output-area");

function reverseText(text) {
    // hamta alla bokstaver i texten (denna ger oss en array)
    const letters = text.split("");

    // gor sa att arrayen gar backlanges
    const reversedLetters = letters.reverse();

    // limma ihop alla bokstaver fran arrayen till en strang igen.
    const finalText = reversedLetters.join("");

    return finalText;
}

function whenKeyUp(event) {
    const textValue = event.target.value; // texten fran input faltet
    const textValueBackwards = reverseText(textValue); // gor texten baklanges

    area2.value = textValueBackwards;
}

area1.addEventListener("keyup", whenKeyUp);

/* ======================================================================== */

// denna funktion skapar en div med text i, sedan returnerar vi den.
function createSquare() {
    const square = document.createElement("div");
    square.innerText = "You are typing something!";
    return square;
}

// denna funktion tar in 2 argument.
// 1. Ett element som skall skickas in nagonstans
// 2. En foralder dar elementet skall ligga i
// 
// Denna funktion returnerar ingenting.
function insertSquare(square, parent) {
    parent.appendChild(square);
}


// Denna funktion kors nar anvandaren trycker ned en tangent.
function whenKeyDown(event) {
    const mySquare = createSquare();
    insertSquare(mySquare, document.body);
}

// vi lagger till en "keydown" eventlistener pa varan forsta textarea.
area1.addEventListener("keydown", whenKeyDown);