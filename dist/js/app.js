import { Home } from "./controllers/home.js";
const search = document.querySelector('.search__btn');
const controllerHome = new Home();
search.addEventListener('click', () => {
    controllerHome.searchUser();
    console.log(controllerHome);
    console.log(controllerHome.searchUser());
});
