import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({submit}, popupFormSelector) {
        super(popupFormSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.form');
    }

    close() {
        this._form.reset();
        super.close();
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.form__input');
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        
        return this._formValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) =>{
            evt.preventDefault();
            this._submit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }
} 