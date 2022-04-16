import Popup from './Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor({submit}, popupSelector) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.form');
        
        this._submitButton = this._form.querySelector('.form__button');
        
    }

    open(cardId, card) {
        this._cardToRemove  = card;
        this._cardId = cardId;
        super.open();
    }

    close() {
        super.close();
    }

    setEventListeners() {
        this._submitButton.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._submit(this._cardId, this._cardToRemove);
        });

        super.setEventListeners();
    }
}