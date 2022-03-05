//Попап открытой карточки
const popupCard = document.querySelector('.popup_type_card');
const popupCardImage = popupCard.querySelector('.popup__image');
const popupCardPlace = popupCard.querySelector('.popup__place');
const popupCardClose = popupCard.querySelector('.popup__close');

export class Card {
  constructor(data, cardSelector) {
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
    this._element.querySelector('.element__title').textContent = this._name;
    
    return this._element;
  }
  
  _handleOpenPopup() {
    popupCardImage.src = this._link;
    popupCardPlace.textContent = this._name;
    popupCard.classList.add('popup_opened');
  }
  
  _handleClosePopup() {
    popupCardImage.src = '';
    popupCardPlace.textContent = '';
    popupCard.classList.remove('popup_opened');
  }

  _toggleLikeButton(evt) {
    evt.target.classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup();
    });
    
    popupCardClose.addEventListener('click', () => {
      this._handleClosePopup();
    });

    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });

  }

}