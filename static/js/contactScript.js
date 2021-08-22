document.querySelector('.navbar-nav > .nav-item.active').classList.remove('active');
document.querySelector('.navbar-nav > #contact').classList.add('active');


// function removeSuccess() {
//     setTimeout(remove, 4000);
// }

// function remove() {
//     var alert = document.getElementById('success-message');
//     alert.remove();
// }

var myAlert = document.getElementById('success-message');

function closeAlert() {
    myAlert.remove();
}
