//контейнеры
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const cardContainer=document.querySelector('.elements');
const popupCard=document.querySelector('.popup_type_card');

const cardTemplate=document.querySelector('#card').content;


const profileName=document.querySelector('.profile__name');
const profilejob=document.querySelector('.profile__job');
const popupName=popupEdit.querySelector('.popup__text_type_name');
const popupJob=popupEdit.querySelector('.popup__text_type_job');
const link=popupAdd.querySelector('.popup__text_type_link');
const place=popupAdd.querySelector('.popup__text_type_place');
const popupImage=popupCard.querySelector('.popup__image');
const popupPlace=popupCard.querySelector('.popup__place');

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
  renderCard(initialCards[i].link, initialCards[i].name);
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

//оживить форму в попапе редактирования профиля 
const formEdit=popupEdit.querySelector('.popup__form_type_edit');
formEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  //поля формы, в которых хранятся значения имени и работы
  
  //вставляем в поля формы данные со страницы
  profileName.textContent=popupName.value;
  profilejob.textContent=popupJob.value;
  //закрываем попап                                                                                                                                                                
  closePopup(popupEdit);
});

//оживить форму в попапе добавления карточки 
const formAdd=popupAdd.querySelector('.popup__form_type_add');
formAdd.addEventListener('submit', function(evt) {
  evt.preventDefault();
  renderCard(link.value, place.value);
  //закрываем попап                                                                                                                                                                
  closePopup(popupAdd);
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

function renderCard(link, name) {
  const card=initCard(link, name);
  cardContainer.prepend(card);
}

function openPopup(popup) {
  //открыть попап
  popup.classList.add('popup_opened');
}

function initCard(link, name) {
  const card=cardTemplate.querySelector('.element').cloneNode(true);
  //вставить в шаблон значения из массива или формы
  const cardImage=card.querySelector('.element__image');
  const cardPlace=card.querySelector('.element__title');
  cardImage.setAttribute('src', link);
  cardPlace.textContent=name;
  //оживить кнопку "открыть карточку"
  cardImage.addEventListener('click', function() {
    //вставить в попап значения из карточки
    popupImage.setAttribute('src', link);
    popupImage.setAttribute('alt', name);
    popupPlace.textContent=name;
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







