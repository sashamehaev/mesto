//Попап открытой карточки
const popupCard = document.querySelector('.popup_type_card');
const popupCardImage = popupCard.querySelector('.popup__image');
const popupCardPlace = popupCard.querySelector('.popup__place');

export class Card {
  constructor(data, cardSelector, openPopup) {
    this._openPopup = openPopup;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  }

  generateCard() {
    this._element = this._cardElement;
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    
    return this._element;
  }
  
  _handleOpenPopup() {
    popupCardImage.src = this._link;
    popupCardImage.alt = this._name;
    popupCardPlace.textContent = this._name;
    this._openPopup(popupCard);
  }

  _toggleLikeButton(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });

  }

}