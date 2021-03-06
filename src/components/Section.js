export default class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    setItem(element) {
        this._container.append(element);
    }

    inputCard(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }
}