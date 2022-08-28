import { GitHubApiConsult } from "../interfaces/github-api-consult.js";
import { User } from "../models/user.js";
import { UserView } from "../views/userView.js";

export class UserController {
    private inputUser: HTMLInputElement;
    private userView = new UserView('.infos');

    constructor() {
        this.inputUser = document.querySelector('.search__input');
    }

    public async searchUser(): Promise<void> {
        const user = this.inputUser.value;
        let userConsult: Response = await fetch(`https://api.github.com/users/${user}`);
        let userConsultConvert: GitHubApiConsult = await userConsult.json();

        const userData = new User(userConsultConvert.avatar_url, userConsultConvert.name, userConsultConvert.login, userConsultConvert.bio, userConsultConvert.public_repos, userConsultConvert.followers, userConsultConvert.following, userConsultConvert.location, userConsultConvert.html_url, userConsultConvert.twitter_username, userConsultConvert.company);

        this.userView.update(userData);
    }
    
}

//buscar os dados da API que quero utilizar e popular a classe de modelo para ser usada na view