import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import {
  initialCards,
  cardListSelector,
  popupEditprofileSelector,
  popupAddCardSelector,
  editButton,
  addButton,
  popupCardImageSelector,
  editForm,
  popupAddCardForm
} from '../utils/constants.js';

const cardList = new Section({
  items: initialCards, 
  renderer: (item) => {
    const card = new Card(item, '#card', {
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(item, popupCardImageSelector);
        popupWithImage.open();
      }
    });
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);
  }
}, cardListSelector);


const popupAddCard = new PopupWithForm({
  submit: (item) => {
    const card = new Card(item, '#card', {
      handleCardClick: () => {
        const popupWithImage = new PopupWithImage(item, popupCardImageSelector);
        popupWithImage.open();
      }
    });
    const cardElement = card.generateCard();
    cardList.setItem(cardElement);    
  }
}, popupAddCardSelector);

const user = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__job'
});
const popupEditProfile = new PopupWithForm({
  submit: (item) => {
    user.setUserInfo(item);
  }
}, popupEditprofileSelector);

popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();

addButton.addEventListener('click', () => {
  popupAddCard.open();
});

editButton.addEventListener('click', () => {
  popupEditProfile.open();
  const userInfo = user.getUserInfo();
  const namePopup = document.querySelector('.form__input_type_name');
  const aboutPopup = document.querySelector('.form__input_type_job');
  namePopup.value = userInfo.name;
  aboutPopup.value = userInfo.about;
});

cardList.renderItems();

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

//Сделать формы валидными
const formProfileValidator = new FormValidator(validationConfig, editForm);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, popupAddCardForm);
formCardValidator.enableValidation();














 
