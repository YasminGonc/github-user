export class ErrorInputView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template() {
        return `
            <p class="infos__error">Digite o usuário.</p>
        `;
    }
    update() {
        let template = this.template();
        this.element.style.backgroundColor = '#202A46';
        this.element.innerHTML = template;
    }
}
