var userInput = prompt("Please enter a number between 1 and 100");

while (isNaN(userInput) || userInput <= 0 || userInput > 100) {
    var userInput = prompt("That is outside the acceptable range.  Enter a number between 1 and 100");
}

for (var count=0; count < userInput; userInput--) {
    document.write("Number of items : " + userInput);
    document.write("</br>");
    }
