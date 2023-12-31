let body= document.body;

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = ()=>{
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}

let sideBar = document.querySelector('.header .flex .sideBar');

document.querySelector('#menu-btn').onclick = ()=>{
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
}

window.onscroll = ()=>{
    profile.classList.remove('active');
    searchForm.classList.remove('active');
}