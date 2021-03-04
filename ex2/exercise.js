/*var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth
var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight
var widthHeightCal = document.getElementsByTagName('p');
widthHeightCal.inneHTML = 'borowse inner window width:' + w + ', height: ' + h + '.';
*/
var pElement = document.getElementsByTagName('p')[1];
var bodyElement = document.querySelector('body')
window.addEventListener('resize', function (){
    var weight = window.innerWidth
    var height = window.innerHeight

    pElement.innerHTML = 'the window is ' + weight + ' px width and' + height + 'px height'; 
})
