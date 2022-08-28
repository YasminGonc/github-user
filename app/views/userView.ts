import { User } from "../models/user.js";

export class UserView {
    private element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }
    
    private template(model: User): string {
        return `
            <div class="infos__header">
                <img src="${model.avatar_url}" alt="Foto perfil do usuário no GitHub" class="infos__header-img">
                <div class="infos__header-login">
                    <h2 class="login__titulo">${model.name}</h2>
                    <p class="login__user">@${model.login}</p>
                </div>
            </div>
            <div class="infos__main">
                <p class="infos__main-bio">${model.bio}</p>
                <div class="infos__main-numbers">
                    <p class="numbers__titulo">Repos.</p>
                    <p class="numbers__titulo">Seguidores</p>
                    <p class="numbers__titulo">Seguindo</p>
                    <p>${model.repos}</p>
                    <p>${model.followers}</p>
                    <p>${model.following}</p>
                </div>
                <div class="infos__main-extra">
                    <p class="extra__titulo"><i class="fa-solid fa-location-dot icone"></i>${model.location}</p>
                    <a href="${model.link_url}" target="_blank" class="extra__titulo"><i class="fa-solid fa-link icone"></i>${model.link_url}</a>
                    <p class="extra__titulo"><i class="fa-brands fa-twitter icone"></i>${model.twitter_url}</p>
                    <p class="extra__titulo"><i class="fa-solid fa-building icone"></i>${model.company}</p>
                </div>
            </div>
        `
    }

    public update(model: any) {
        let template = this.template(model);
        this.element.style.backgroundColor = '#202A46';
        this.element.innerHTML = template;
    }
}