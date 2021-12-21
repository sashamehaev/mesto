const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closingButton = document.querySelector('.popup__close');



function toggleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function renderCard(evt) {
  evt.preventDefault();
  const cardContainer=document.querySelector('.elements');
  const cardTemplate=document.querySelector('#element').content;
  const card=cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage=card.querySelector('.element__image');
  const cardPlace=card.querySelector('.element__title');
  const formImage=document.querySelector('.popup__text_type_link');
  const formPlace=document.querySelector('.popup__text_type_place');
  cardImage.setAttribute('src', formImage.value);
  cardPlace.textContent=formPlace.value;
  cardContainer.append(card);
  const likeCard = card.querySelector('.element__like');
  likeCard.addEventListener('click', toggleLike);
  closePopup();
}

function addCard() {
  const popupContainer=document.querySelector('.popup__container');
  const profileTemplate=document.querySelector('#card-template').content;
  const form=profileTemplate.querySelector('.popup__form').cloneNode(true);
  popupContainer.append(form);
  openPopup();
  form.addEventListener('submit', renderCard);
}

function initCards(cards) {
  for(let i=0; i<cards.length; i=i+1) {
    const cardContainer=document.querySelector('.elements');
    const cardTemplate=document.querySelector('#element').content;
    const card=cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage=card.querySelector('.element__image');
    const cardPlace=card.querySelector('.element__title');
    cardImage.setAttribute('src', cards[i].link);
    cardPlace.textContent=cards[i].name;
    cardContainer.append(card);
    const likeCard = card.querySelector('.element__like');
    likeCard.addEventListener('click', toggleLike);
    const deleteButton = card.querySelector('.element__delete');
    deleteButton.addEventListener('click', function() {
      card.remove();
    });
  }
}

function editProfile() {
  const popupContainer=document.querySelector('.popup__container');
  const profileTemplate=document.querySelector('#profile-template').content;
  const form=profileTemplate.querySelector('.popup__form').cloneNode(true);
  const formName=form.querySelector('.popup__text_type_name');
  const formJob=form.querySelector('.popup__text_type_job');
  const name=document.querySelector('.profile__name');
  const job=document.querySelector('.profile__job');
  formName.value=name.textContent;
  formJob.value=job.textContent;
  popupContainer.append(form);
  form.addEventListener('submit', renderProfile);
  openPopup();
}

function openPopup() {
  const openingPopup = document.querySelector('.popup');
  openingPopup.classList.add('popup_opened');
}

function closePopup() {
  const openingPopup = document.querySelector('.popup');
  openingPopup.classList.remove('popup_opened');
  const form=document.querySelector('.popup__form');
  form.remove();
}

function renderProfile(evt) {
  evt.preventDefault();
  const name=document.querySelector('.profile__name');
  const job=document.querySelector('.profile__job');
  const formName=document.querySelector('.popup__text_type_name');
  const formJob=document.querySelector('.popup__text_type_job');
  name.textContent=formName.value;
  job.textContent=formJob.value;
  closePopup();
}

editButton.addEventListener('click', editProfile);
closingButton.addEventListener('click', closePopup);
addButton.addEventListener('click', addCard);
initCards(initialCards);
