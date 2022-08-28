export class ErrorView {
    private element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    private template(): string {
        return `
            <i class="fa-solid fa-triangle-exclamation"></i>
            <p class="infos__error">Usuário não encontrado. Tente novamente.</p>
        `
    }

    public update(): void {
        let template = this.template();
        this.element.style.backgroundColor = '#202A46';
        this.element.innerHTML = template;
    }
}