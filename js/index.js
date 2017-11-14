var email;
var user;
window.onload = function(){
    email = localStorage.getItem('currentUser');
    user = JSON.parse(localStorage.getItem(email));
    calendar = document.getElementById(calendar);
    if(user.knee == "true") document.getElementByClassName("squats").innerHTML = '';
    if(user.back == "true") document.getElementByClassName("yoga").innerHTML = '';
    if(user.back == "true") calendar.rows[1].cells[0].innerHTML = 'aaaa';
}