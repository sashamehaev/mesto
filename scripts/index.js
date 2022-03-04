import {Card} from './Card.js';
//массив с фотографиями и названиями мест
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
  
  initialCards.forEach((item) => {
    const card = new Card(item, '#card');
    const cardElement = card.generateCard();
    document.querySelector('.elements').append(cardElement);
  });

  const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const cardContainer = document.querySelector('.elements');

const cardTemplate = document.querySelector('#card').content;
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');
const popupName = popupEditProfile.querySelector('.form__input_type_name');
const popupJob = popupEditProfile.querySelector('.form__input_type_job');
const place = document.querySelector('.form__input_type_place');
const image = document.querySelector('.form__input_type_link');

const popupPlace = popupOpenCard.querySelector('.popup__place');

//оживить кнопку "закрыть попап редактирования"
const btnClosePopupEdit = popupEditProfile.querySelector('.popup__close');
btnClosePopupEdit.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupEditProfile);
});

//оживить кнопку "закрыть попап добавления карточки"
const btnClosePopupAdd = popupAddCard.querySelector('.popup__close');
popupCloseAddCard.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupAddCard);
});

//оживить кнопку "редактировать профиль"
const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function() {
  //вставляем в поля формы данные со страницы
  popupName.value=profileName.textContent;
  popupJob.value=profilejob.textContent;
  //отрисовываем попап
  openPopup(popupEditProfile);
}); 

//оживить кнопку "добавить карточку"
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', function() {
  const formElement = popupAddCard.querySelector(validationConfig.formSelector);
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  toggleButtonState(inputList, buttonElement, validationConfig);
  //открыть попап
  openPopup(popupAddCard);
});

function closePopup(popup) {
  //скрыть попап
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
}

function openPopup(popup) {
  //открыть попап
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function handleEsc(evt) {
  if(evt.key==="Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

//оживить форму в попапе редактирования профиля
const editForm = popupEditProfile.querySelector('.form');
editForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  //вставляем на страницу данные с форм
  profileName.textContent=popupName.value;
  profilejob.textContent=popupJob.value;
  //закрываем попап                                                                                                                                                                
  closePopup(popupEditProfile);
});

//оживить форму в попапе добавить карточку
const formAddNewCard = popupAddCard.querySelector('.form');
formAddNewCard.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const card = {
      name: place.value,
      link: image.value
    };
  addCard(card);
  formAddNewCard.reset();
  //закрываем попап                                                                                                                                                                
  closePopup(popupAddCard);
});

//закрыть попап нажатием на оверлей
const overlayList = Array.from(document.querySelectorAll('.popup'));
overlayList.forEach((overlay) => {
  overlay.addEventListener('click', function(evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(overlay);
    }
  });
});