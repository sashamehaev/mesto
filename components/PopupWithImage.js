import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupCardImageSelector) {
        super(popupCardImageSelector);
        this._popupImage = this._popup.querySelector('.popup__image');
        this._popupPlace = this._popup.querySelector('.popup__place');
        
    }

    open(link, name) {
        this._popupImage.src = link;
        this._popupPlace.textContent = name;
        super.open();
    }
}