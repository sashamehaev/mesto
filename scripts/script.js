//контейнеры
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const cardContainer=document.querySelector('.elements');
const popupCard=document.querySelector('.popup-card');

const cardTemplate=document.querySelector('#card').content;

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
  //имя и работа, взятые со страницы
  const name=document.querySelector('.profile__name');
  const job=document.querySelector('.profile__job');
  //поля формы, в которых хранятся значения имени и работы
  const popupName=popupEdit.querySelector('.popup__text_type_name');
  const popupJob=popupEdit.querySelector('.popup__text_type_job');
  //вставляем в поля формы данные со страницы
  popupName.value=name.textContent;
  popupJob.value=job.textContent;
  //оживить кнопку "закрыть попап"
  const closingButton = popupEdit.querySelector('.popup__close');
    closingButton.addEventListener('click', function() {
      //закрыть попап
      closePopup(popupEdit);
  });
  //отрисовываем попап
  openPopup(popupEdit);
});

//оживить форму в попапе редактирования профиля 
const formEdit=popupEdit.querySelector('.popup__form_type_edit');
formEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const name=document.querySelector('.profile__name');
  const job=document.querySelector('.profile__job');
  //поля формы, в которых хранятся значения имени и работы
  const popupName=popupEdit.querySelector('.popup__text_type_name');
  const popupJob=popupEdit.querySelector('.popup__text_type_job');
  //вставляем в поля формы данные со страницы
  name.textContent=popupName.value;
  job.textContent=popupJob.value;
  //закрываем попап                                                                                                                                                                
  closePopup(popupEdit);
});

//оживить форму в попапе добавления карточки 
const formAdd=popupAdd.querySelector('.popup__form_type_add');
formAdd.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const link=popupAdd.querySelector('.popup__text_type_link');
  const name=popupAdd.querySelector('.popup__text_type_place');
  renderCard(link.value, name.value);
  //закрываем попап                                                                                                                                                                
  closePopup(popupAdd);
});

//оживить кнопку "добавить карточку"
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', function() {
  //открыть попап
  openPopupAdd(popupAdd);
});

function openPopupAdd(popup) {
  //открыть попап
  popup.classList.add('popup_opened');
  //оживить кнопку "закрыть попап"
  const closingButton = popup.querySelector('.popup__close');
  closingButton.addEventListener('click', function() {
    //закрыть попап
    closePopup(popup);
  });
}

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
    popupCard.querySelector('.popup-card__image').setAttribute('src', link);
    popupCard.querySelector('.popup-card__image').setAttribute('alt', name);
    popupCard.querySelector('.popup-card__place').textContent=name;
    openPopup(popupCard);
    //оживить кнопку "закрыть попап"
    const closingButton = popupCard.querySelector('.popup__close');
    closingButton.addEventListener('click', function() {
    //закрыть попап
    closePopup(popupCard);
    });
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







