function addKeyword() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.getElementById("list").value);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}
