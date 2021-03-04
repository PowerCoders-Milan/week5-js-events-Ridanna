// define your functions here
var a = document.querySelector('a')
 function changeBoldColor() {
  var elements = document.querySelectorAll('strong');
  for (var i= 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }
}
a.addEventListener('mouseenter', changeBoldColor);

/*document.querySelectorAll('strong');
var strong = document.querySelectorAll('strong');
var a = document.querySelectorAll("strong");
for (var i= 0; i < a.length; i++) {
    a[i].style.color = "red";
}
*/



