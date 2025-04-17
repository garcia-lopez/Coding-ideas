document.addEventListener("DOMContentLoaded", function() {

    const sentence = document.getElementById("sentenceOne");
    const sentenceTwo = document.createElement('h1');
    const sentenceThree = document.createElement('h1');

    const elements = [ sentenceTwo, sentenceThree];

    const properties = [
        two = {
            id: "sentenceTwo",
            className: "mainMessage",
            text: "you are a"
        },
        three = {
            id: "sentenceThree",
            className: "mainMessage",
            text: "certified engineer"
        }
    ];

    sentence.addEventListener("animationend", function(event) {
       if (event.animationName === "typing") {
           addNewElement(elements[0], properties[0]);
         }
         sentence.style.animation = "none";
         sentence.style.border = "none";
     });

     sentenceTwo.addEventListener("animationend", function(event) {
        if (event.animationName === "typing") {
            addNewElement(elements[1], properties[1]);
            sentenceTwo.style.animation = "none";
            sentenceTwo.style.border = "none";

        }
     })
     
     function addNewElement(element, propertie) {
        element.className = propertie.className;
        element.textContent = propertie.text;
        document
            .querySelector('.container')
            .appendChild(element)
     }
 });