var name = prompt("What's your name?");

name = name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLowerCase();

alert("Hi, " + name + "!");
