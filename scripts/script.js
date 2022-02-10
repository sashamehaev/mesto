//контейнеры
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const cardContainer = document.querySelector('.elements');
const popupCard = document.querySelector('.popup_type_card');
const cardTemplate = document.querySelector('#card').content;
const profileName = document.querySelector('.profile__name');
const profilejob = document.querySelector('.profile__job');
const popupName = popupEdit.querySelector('.form__input_type_name');
const popupJob = popupEdit.querySelector('.form__input_type_job');
const place = document.querySelector('.form__input_type_place');
const image = document.querySelector('.form__input_type_link');
const popupImage = popupCard.querySelector('.popup__image');
const popupPlace = popupCard.querySelector('.popup__place');

//оживить кнопку "закрыть попап редактирования"
const closePopupEdit = popupEdit.querySelector('.popup__close');
closePopupEdit.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupEdit);
});

//оживить кнопку "закрыть попап добавления карточки"
const closePopupAdd = popupAdd.querySelector('.popup__close');
closePopupAdd.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupAdd);
});

//оживить кнопку "закрыть попап с фотографией"
const closePopupCard = popupCard.querySelector('.popup__close');
closePopupCard.addEventListener('click', function() {
  //закрыть попап
  closePopup(popupCard);
});

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

//загрузить карточки из массива
for(let i=0; i<initialCards.length; i=i+1) {
  //инициализация карточки из массива
  addCard(initialCards[i].link, initialCards[i].name);
}

//оживить кнопку "редактировать профиль"
const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function() {
  //вставляем в поля формы данные со страницы
  popupName.value=profileName.textContent;
  popupJob.value=profilejob.textContent;
  //отрисовываем попап
  openPopup(popupEdit);
}); 

//оживить кнопку "добавить карточку"
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', function() {
  //открыть попап
  openPopup(popupAdd);
});

function closePopup(popup) {
  //скрыть попап
  popup.classList.remove('popup_opened');
}

function addCard(linkValue, nameValue) {
  const card=initCard(linkValue, nameValue);
  cardContainer.prepend(card);
}

function openPopup(popup) {
  //открыть попап
  popup.classList.add('popup_opened');
}

function initCard(linkValue, nameValue) {
  const card=cardTemplate.querySelector('.element').cloneNode(true);
  //вставить в шаблон значения из массива или формы
  const cardImage=card.querySelector('.element__image');
  const cardPlace=card.querySelector('.element__title');
  cardImage.setAttribute('src', linkValue);
  cardPlace.textContent=nameValue;
  //оживить кнопку "открыть карточку"
  cardImage.addEventListener('click', function() {
    //вставить в попап значения из карточки
    popupImage.setAttribute('src', linkValue);
    popupImage.setAttribute('alt', nameValue);
    popupPlace.textContent=nameValue;
    openPopup(popupCard);
  });
  //оживить кнопку "лайкнуть карточку"
  const likeCard = card.querySelector('.element__like');
  likeCard.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });
  //оживить кнопку "удалить карточку"
  const deleteButton = card.querySelector('.element__delete');
  deleteButton.addEventListener('click', function() {
    card.remove();
  });
  return card;  
}

//оживить форму в попапе редактирования профиля
const editForm = popupEdit.querySelector('.form');
editForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  //вставляем на страницу данные с форм
  profileName.textContent=popupName.value;
  profilejob.textContent=popupJob.value;
  //закрываем попап                                                                                                                                                                
  closePopup(popupEdit);
});

//оживить форму в попапе добавить карточку
const addForm = popupAdd.querySelector('.form');
addForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard(image.value, place.value);
  image.value = '';
  place.value = '';
  const addButton = addForm.querySelector('.form__button');
  addButton.setAttribute('disabled', true);
  addButton.classList.add('form__button_disabled');
  //закрываем попап                                                                                                                                                                
  closePopup(popupAdd);
});

//закрыть попам нажатием на оверлей
const overlayList = Array.from(document.querySelectorAll('.popup'));
overlayList.forEach((overlay) => {
  overlay.addEventListener('click', function() {
    closePopup(overlay);
  });
  document.addEventListener('keydown', function(evt) {
    if(evt.key==="Escape") {
      closePopup(overlay);
    }
  });
});


