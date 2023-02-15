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