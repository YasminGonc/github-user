var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../models/user.js";
import { UserView } from "../views/userView.js";
export class UserController {
    constructor() {
        this.userView = new UserView('.infos');
        this.inputUser = document.querySelector('.search__input');
    }
    searchUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.inputUser.value;
            let userConsult = yield fetch(`https://api.github.com/users/${user}`);
            let userConsultConvert = yield userConsult.json();
            const userData = new User(userConsultConvert.avatar_url, userConsultConvert.name, userConsultConvert.login, userConsultConvert.bio, userConsultConvert.public_repos, userConsultConvert.followers, userConsultConvert.following, userConsultConvert.location, userConsultConvert.html_url, userConsultConvert.twitter_username, userConsultConvert.company);
            this.userView.update(userData);
        });
    }
}
