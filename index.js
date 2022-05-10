// Write your code here!
const element = document.getElementById('main');
element.remove();

// document.body.onload = addElement;

// function addElement(){
//     const newHeader = document.createElement("h1");

//     const newContent = document.createTextNode("victory");

//     newHeader.appendChild(newContent);

//     const currentHeader = document.getElementById("h1");
//     document.body.insertBefore(newHeader, currentHeader);
// }

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.className = "victory";
newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = "Liza is the champion";


