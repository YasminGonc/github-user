import { UserController } from "./controllers/userController.js";
import { ErrorInputView } from "./views/errorInputView.js";
const search = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
const controllerHome = new UserController();
const errorInputView = new ErrorInputView('.infos');
search.addEventListener('click', () => {
    if (searchInput.value.length == 0) {
        errorInputView.update();
        searchInput.focus();
    }
    else {
        controllerHome.searchUser();
    }
});
