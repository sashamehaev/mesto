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
  popupAddCardForm,
  validationConfig,
  namePopup,
  aboutPopup
} from '../utils/constants.js';

const createCard = (item) => {
  const card = new Card(item, '#card', {
    handleCardClick: (link, name) => {
      popupWithImage.open(link, name);
    }
  });

  return card.generateCard();
}

const cardList = new Section({
  items: initialCards, 
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.setItem(cardElement);
  }
}, cardListSelector);

const popupAddCard = new PopupWithForm({
  submit: (item) => {
    const cardElement = createCard(item);
    cardList.setItem(cardElement);    
  }
}, popupAddCardSelector);

const popupWithImage = new PopupWithImage(popupCardImageSelector);

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
popupWithImage.setEventListeners();

addButton.addEventListener('click', () => {
  formCardValidator.toggleButtonState();
  popupAddCard.open();
});

editButton.addEventListener('click', () => {
  const userInfo = user.getUserInfo();
  namePopup.value = userInfo.name;
  aboutPopup.value = userInfo.about;
  popupEditProfile.open();
});



cardList.renderItems();


const formProfileValidator = new FormValidator(validationConfig, editForm);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, popupAddCardForm);
formCardValidator.enableValidation();














 
