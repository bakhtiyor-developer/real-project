// variables
const navBtn = document.querySelector('.nav-icon');
const navbarList = document.querySelector('.dropbar__list');
const navHamburgerIcon = document.querySelector('.fa-bars');
navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navHamburgerIcon.classList.toggle('fa-times');
    navbarList.classList.toggle('dropbar--active');
})

function sendmessage(){
    chat_id = document.getElementById("chatid").value;
    token = document.getElementById("token").value;
    message = document.getElementById("message").value;
    $.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id);
}