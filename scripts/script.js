const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

//контейнеры
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const cardContainer = document.querySelector('.elements');
const popupOpenCard = document.querySelector('.popup_type_card');
const cardTemplate = document.querySelector('#card').content;
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');
const popupName = popupEditProfile.querySelector('.form__input_type_name');
const popupJob = popupEditProfile.querySelector('.form__input_type_job');
const place = document.querySelector('.form__input_type_place');
const image = document.querySelector('.form__input_type_link');
const popupImage = popupOpenCard.querySelector('.popup__image');
const popupPlace = popupOpenCard.querySelector('.popup__place');

//оживить кнопку "закрыть попап редактирования"
const btnClosePopupEdit = popupEditProfile.querySelector('.popup__close');
btnClosePopupEdit.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupEditProfile);
});

//оживить кнопку "закрыть попап добавления карточки"
const popupCloseAddCard = popupAddCard.querySelector('.popup__close');
popupCloseAddCard.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupAddCard);
});

//оживить кнопку "закрыть попап с фотографией"
const popupCloseCard = popupOpenCard.querySelector('.popup__close');
popupCloseCard.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupOpenCard);
});

//загрузить карточки из массива
initialCards.forEach((card) => {
  addCard(card);
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

function addCard(card) {
  const cardCreate=createCard(card);
  cardContainer.prepend(cardCreate);
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

function createCard(card) {
  const cardCreate=cardTemplate.querySelector('.element').cloneNode(true);
  //вставить в шаблон значения из массива или формы
  const cardImage=cardCreate.querySelector('.element__image');
  const cardPlace=cardCreate.querySelector('.element__title');
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardPlace.textContent=card.name;
  //оживить кнопку "открыть карточку"
  cardImage.addEventListener('click', function() {
    //вставить в попап значения из карточки
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupPlace.textContent=card.name;
    openPopup(popupOpenCard);
  });
  //оживить кнопку "лайкнуть карточку"
  const likeCard = cardCreate.querySelector('.element__like');
  likeCard.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  //оживить кнопку "удалить карточку"
  const deleteButton = cardCreate.querySelector('.element__delete');
  deleteButton.addEventListener('click', function() {
    cardCreate.remove();
  });
  return cardCreate;  
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
      name: `${place.value}`,
      link: `${image.value}`
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

enableValidation(validationConfig);
