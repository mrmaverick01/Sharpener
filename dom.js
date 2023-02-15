// document.dir(document);
// document.log(document.domain);
document.log(document.URL);
document.log(document.title);
// document.title=123;
document.log(document.doctype);
document.log(document.head);
document.log(document.body);
document.log(document.all);
document.log(document.forms);
document.log(document.all[10]);


console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

var item = document.querySelector('.list-group-item');
item.style.background = "green";
document.getElementById("item3").style.display = "none";

////////////////
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
console.log(itemList.parentElement);
console.log(itemList.childNodes);
console.log(itemList.lastElementChild);
console.log(itemList.firstElementChild);
console.log(itemList.lastChild);
console.log(itemList.firstChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);
const newChild = document.createElement("div");
console.log(newChild);
newChild.setAttribute('title','Hello');
var newDiv = document.createTextNode('Hello World');
newChild.appendChild(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newChild,h1);