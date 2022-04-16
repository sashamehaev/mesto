export default class Card {
  constructor(data, Id, cardSelector, {handleCardClick, deleteCard, addLike, deleteLike}) {
    this._userId = Id;
    this._name = data.name;
    this._ownerId = data.owner._id;
    this._link = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._deleteCard = deleteCard;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
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
    if(this._ownerId !== this._userId) {
      const trashIcon = this._element.querySelector('.element__delete');
      trashIcon.setAttribute('disabled', true);
      trashIcon.classList.add('element__delete_hidden');
    }
    this._renderLike();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.element__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like-value').textContent = this._likes.length;
    
    return this._element;
  }

  _handleLikeClick() {
    const myLike = this._findMyLike();
    if(myLike) {
      this._deleteLike(this._cardId);
      this._element.querySelector('.element__like').classList.remove('element__like_active');
    } else {
      this._addLike(this._cardId);
      this._element.querySelector('.element__like').classList.add('element__like_active');
    }
  }

  _renderLike() {
    const isLiked = this._findMyLike();
    if(isLiked) {
      this._element.querySelector('.element__like').classList.add('element__like_active');
    }
  }

  _findMyLike() {
    const myLike = this._likes.some((like) => {
      return like._id === this._userId;
    });
    return myLike;
  }

  getLikefromApi(res) {
    this._likes = res.likes;
    this._element.querySelector('.element__like-value').textContent = this._likes.length;
  }

  _setEventListeners() {
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });

    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard(this._cardId, this._element);
    });
    
  }

}