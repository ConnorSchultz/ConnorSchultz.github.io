var email;
var user;
window.onload = function(){
    email = localStorage.getItem('currentUser');
    user = JSON.parse(localStorage.getItem(email));
    calendar = document.getElementById('calendar');
    calendar.rows[0].cells[0].innerHTML = 'aaaa';
    document.getElementById('squats').innerHTML = '';
    document.getElementById('yoga').innerHTML = '';

}