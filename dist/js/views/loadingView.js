export class LoadingView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template() {
        return `
            <i class="fa-solid fa-spinner"></i>
            <p class="infos__error">Loading...</p>
        `;
    }
    update() {
        let template = this.template();
        this.element.style.backgroundColor = '#202A46';
        this.element.innerHTML = template;
    }
}
