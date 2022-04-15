export default class Card {
  constructor(data, cardSelector, {handleCardClick, deleteCard, addLike, deleteLike}) {
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
    if(this._ownerId !== 'a166c701ae6155d82d08e359') {
      this._element.querySelector('.element__delete').setAttribute('disabled', true);
      this._element.querySelector('.element__delete').classList.add('element__delete_hidden');
    }
    this._renderLike();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__like-value').textContent = this._likes.length;
    return this._element;
  }

  _handleLikeClick(evt) {
    const myLike = this._findMyLike();
    if(myLike) {
      this._deleteLike(this._cardId);
    } else {
      this._addLike(this._cardId);
    }
    evt.target.classList.toggle('element__like_active');
  }

  _renderLike() {
    const isLiked = this._findMyLike();
    if(isLiked) {
      this._element.querySelector('.element__like').classList.add('element__like_active');
    }
  }

  _findMyLike() {
    const myLike = this._likes.some((like) => {
      return like._id === 'a166c701ae6155d82d08e359';
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

    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._handleLikeClick(evt);
    });

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard(this._cardId);
    });
    
  }

}