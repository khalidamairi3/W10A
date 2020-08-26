var first_h1_element = document.querySelector("h1");

first_h1_element.style.color = "blue";

h1_elements=document.querySelectorAll("h1");

h1_elements.forEach(element => {
    element.style.background ="yellow";
    
});


red_p = document.getElementById("red_text");
red_p.style.color = "red";

green_ps=document.getElementsByClassName("green-text");

for(var i=0; i<green_ps.length;i++){
    green_ps[i].style.color="green";
}




ps=document.getElementsByTagName("p");

for(var i=0; i<ps.length;i++){
    ps[i].style["font-family"]="'Courier New', Courier, monospace";
}

var new_text=document.createElement("p");
new_text.innerHTML="new text";
var parent= document.getElementById("texts");
parent.append(new_text);

var text_node = document.createTextNode("i love java script");

var extended_text=document.getElementById("extend");

extended_text.appendChild(text_node);


parent.removeChild(parent.childNodes[7]);


var first_h4_element = document.querySelector("h4");

first_h4_element.classList.add("background-orange");

first_h4_element.classList.remove("purple");

first_h4_element.classList.toggle("big-text");



