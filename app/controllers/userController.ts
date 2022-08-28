import { GitHubApiConsult } from "../interfaces/github-api-consult.js";
import { User } from "../models/user.js";
import { ErrorView } from "../views/errorView.js";
import { UserView } from "../views/userView.js";

export class UserController {
    private inputUser: HTMLInputElement;
    private userView = new UserView('.infos');
    private errorView = new ErrorView('.infos');

    constructor() {
        this.inputUser = document.querySelector('.search__input');
    }

    public async searchUser(): Promise<void> {
        const user = this.inputUser.value;
        let userConsult: Response = await fetch(`https://api.github.com/users/${user}`);
        let userConsultConvert: GitHubApiConsult = await userConsult.json();

        if (userConsultConvert.message) {
            this.errorView.update();
        }

        else {
            const userData = new User(userConsultConvert.avatar_url, userConsultConvert.name, userConsultConvert.login, userConsultConvert.bio, userConsultConvert.public_repos, userConsultConvert.followers, userConsultConvert.following, userConsultConvert.location, userConsultConvert.html_url, userConsultConvert.twitter_username, userConsultConvert.company);

            this.userView.update(userData);
        }
    }
}
