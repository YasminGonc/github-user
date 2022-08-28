export class UserController {
    inputUser: HTMLInputElement;

    constructor() {
        this.inputUser = document.querySelector('.search__input');
    }

    public async searchUser() {
        const user = this.inputUser.value;
        try {
            let userConsult = await fetch(`https://api.github.com/users/${user}`);
        }
        catch() {
            
        }
    }
    
}

//buscar os dados da API que quero utilizar e popular a classe de modelo para ser usada na view