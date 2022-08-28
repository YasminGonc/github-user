import { UserController } from "./controllers/userController.js";

const search = document.querySelector('.search__btn');
const controllerHome = new UserController();

search.addEventListener('click', () => {
    controllerHome.searchUser();
    console.log(controllerHome);
    console.log(controllerHome.searchUser());
})


