export class ErrorInputView {
    private element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    private template(): string {
        return `
            <p class="infos__error">Digite o usuário.</p>
        `
    }

    public update(): void {
        let template = this.template();
        this.element.style.backgroundColor = '#202A46';
        this.element.innerHTML = template;
    }
}