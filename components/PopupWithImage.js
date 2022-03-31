import {
    popupImage,
    popupPlace
} from '../utils/constants.js';

import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(item, popupCardImageSelector) {
        super(popupCardImageSelector);
        this._link = item.link;
        this._name = item.name;
    }

    open() {
        popupImage.src = this._link;
        popupPlace.textContent = this._name;
        super.setEventListeners();
        super.open();
    }
}