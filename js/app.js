// variables
const navBtn = document.querySelector('.nav-icon');
const navbarList = document.querySelector('.dropbar__list');
const navHamburgerIcon = document.querySelector('.fa-bars');
navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navHamburgerIcon.classList.toggle('fa-times');
    navbarList.classList.toggle('dropbar--active');
})


// class Sources {
//     async getSrcs() {
//         try {
//             let srcResult = await fetch('./data/main.json');
//             let srcData = await srcResult.json();
//             let srcElements = srcData.item;
//             srcElements = srcElements.map(item => {
//                 const {title, text} = item.lies;
//                 const {id} = item.sys;
//                 const image = item.lies.image.lies.file.url;
//                 return {title, text, id, image}
//             })
//         } catch (error) {
//             return error
//         }
//     }
// }

// class UI {

// }

// class Storage {

// }


// document.addEventListener('domContentLoaded', () => {
    
// })