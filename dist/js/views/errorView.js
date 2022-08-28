export class ErrorView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template() {
        return `
            <i class="fa-solid fa-triangle-exclamation"></i>
            <p class="infos__error">Usuário não encontrado. Tente novamente.</p>
        `;
    }
    update() {
        let template = this.template();
        this.element.style.backgroundColor = '#202A46';
        this.element.innerHTML = template;
    }
}
