//TITLE

const title = document.createElement("h1");

const textNode = document.createTextNode("Hello World");

title.appendChild(textNode);

const titleElement = document.getElementById("title");
if (titleElement !== null) {
  titleElement.appendChild(title);
}
