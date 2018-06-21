//content.js
function addKeyword() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.getElementById("addlist").value);
    node.appendChild(textnode);
    document.getElementById("wordlist").appendChild(node);
}


function a() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.getElementById("waarde").value);
    node.appendChild(textnode);
    document.getElementById("testlist").appendChild(node);
}
