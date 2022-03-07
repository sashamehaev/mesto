import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './initial-cards.js';


const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

const popupEditProfile = document.querySelector('.popup_type_edit');
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');
const formName = popupEditProfile.querySelector('.form__input_type_name');
const formJob = popupEditProfile.querySelector('.form__input_type_job');
const popupAddCard = document.querySelector('.popup_type_add');
const popupAddCardPlace = popupAddCard.querySelector('.form__input_type_place');
const popupAddCardImage = popupAddCard.querySelector('.form__input_type_link');
const popupCard = document.querySelector('.popup_type_card');
const popupCardClose = popupCard.querySelector('.popup__close');
const cardContainer = document.querySelector('.elements');


//закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
}

//открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

//закрыть попап нажатием esc
function handleEsc(evt) {
  if(evt.key==="Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function addCard(item) {
  const card = new Card(item, '#card', openPopup);
  const cardElement = card.generateCard();
  cardContainer.prepend(cardElement);
}


///////////////////////////////////////////////////////////// Редактировать профиль

//оживить кнопку "редактировать профиль"
const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', () => {
  formName.value=profileName.textContent;
  formJob.value=profilejob.textContent;
  openPopup(popupEditProfile);
});

//оживить форму "редактировать профиль"
const editForm = popupEditProfile.querySelector('.form');
editForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent=formName.value;
  profilejob.textContent=formJob.value;                                                                                                                                                                
  closePopup(popupEditProfile);
});

//Закрыть попап "редактировать профиль"
const btnClosePopupEdit = popupEditProfile.querySelector('.popup__close');
btnClosePopupEdit.addEventListener('click', () => {
  //закрыть попап
  closePopup(popupEditProfile);
});


///////////////////////////////////////////////////////////// Добавить карточку

//Оживить кнопку "Добавить карточку"
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

//Оживить форму "Добавить карточку"
const popupAddCardForm = popupAddCard.querySelector('.form');
popupAddCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const item = {
    name: popupAddCardPlace.value,
    link: popupAddCardImage.value
  };
  addCard(item);
  popupAddCardForm.reset();                                                                                                                                                     
  closePopup(popupAddCard);
  const popupAddCardFormButton = popupAddCardForm.querySelector('.form__button');
  popupAddCardFormButton.classList.add(validationConfig.inactiveButtonClass);
  popupAddCardFormButton.setAttribute('disabled', true);
});

//Закрыть попап "Добавить карточку"
const popupAddCardClose = popupAddCard.querySelector('.popup__close');
popupAddCardClose.addEventListener('click', () => {
  closePopup(popupAddCard);
});


///////////////////////////////////////////////////////////// Закрыть попап с карточкой

popupCardClose.addEventListener('click', () => {
  closePopup(popupCard);
});



///////////////////////////////////////////////////////////// Общее

//закрыть попап нажатием на оверлей
const overlayList = Array.from(document.querySelectorAll('.popup'));
overlayList.forEach((overlay) => {
  overlay.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(overlay);
    }
  });
});

//отобразить карточки на странице
initialCards.forEach((item) => {
  addCard(item);
});

//Сделать формы валидными
const formProfile = document.querySelector('.form_type_edit');
const formProfileValidator = new FormValidator(validationConfig, formProfile);
formProfileValidator.enableValidation();


const formCard = document.querySelector('.form_type_add');
const formCardValidator = new FormValidator(validationConfig, formCard);
formCardValidator.enableValidation();














 
