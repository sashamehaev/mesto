//Попап открытой карточки
const popupCard = document.querySelector('.popup_type_card');
const popupCardImage = popupCard.querySelector('.popup__image');
const popupCardPlace = popupCard.querySelector('.popup__place');

export default class Card {
  constructor(data, cardSelector, {handleCardClick}) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
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
      this._handleCardClick();
    });

    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._toggleLikeButton(evt);
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });

  }

}