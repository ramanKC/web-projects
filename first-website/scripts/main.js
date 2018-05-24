/*
Lets Change the Heading of Page
*/
"use strict";
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function changeHeading(text) {
   
    var myHeading = document.querySelector('h1');
    myHeading.textContent = text;
}

function getElements() {

    var paragraphs = document.getElementsByName("p");
    
    var i = 0;
    for (; i < paragraphs.length; i++) {                       alert(paragraphs[i].nodeName);
    }
}
   

function printFormElements(formId) {
    var x = document.forms[formId];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

       // run this function when the document is loaded
      function appendHeading(headingText) {
        
          
         // create a couple of elements in an otherwise empty HTML page
         var heading = document.createElement("h2");
         var text_node = document.createTextNode(headingText);
         heading.appendChild(text_node);
         document.body.appendChild(heading);
      }

    
      function appendElement(elementTag) {
        
          
         // create a couple of elements in an otherwise empty HTML page
         var heading = document.createElement(elementTag);
          var dummyText = "dummy text";
         var text_node = document.createTextNode(dummyText);
         heading.appendChild(text_node);
         document.body.appendChild(heading);
          
          
      }
