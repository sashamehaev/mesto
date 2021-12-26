//контейнеры
const popupContainer = document.querySelector('.popup');
const cardContainer=document.querySelector('.elements');
const popupCardContainer=document.querySelector('.popup-card');

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
  initCard(initialCards[i].link, initialCards[i].name);
}

//оживить кнопку "добавить карточку"
const addButton = document.querySelector('.profile__add-button');
addButton.addEventListener('click', function() {
  //создать шаблон popupAddCard
  const cardTemplate=document.querySelector('#popupAddCard').content;
  const CardElement=cardTemplate.querySelector('.popup__container').cloneNode(true);
  //вставить шаблон в контейнер
  popupContainer.append(CardElement);
  //открыть попап
  openPopup(popupContainer);
  //оживить кнопку "закрыть попап"
  activateClosingButton(CardElement, popupContainer);
  //оживить кнопку "добавить карточку"
  const form=CardElement.querySelector('.popup__form');
  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    //вставить в карточку значения с формы
    const formImage=form.querySelector('.popup__text_type_link');
    const formPlace=form.querySelector('.popup__text_type_place');
    initCard(formImage.value, formPlace.value);
    //закрыть попап
    closePopup(CardElement, popupContainer);
  });
});

//оживить кнопку "редактировать профиль"
const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function() {
  //создать шаблон popupEditProfile
  const profileTemplate=document.querySelector('#popupEditProfile').content;
  const profileElement=profileTemplate.querySelector('.popup__container').cloneNode(true);
  //имя и работа, взятые со страницы
  const name=document.querySelector('.profile__name');
  const job=document.querySelector('.profile__job');
  //имя и работа, взятые с шаблона
  const popupName=profileElement.querySelector('.popup__text_type_name');
  const popupJob=profileElement.querySelector('.popup__text_type_job');
  //вставляем в шаблон данные со страницы
  popupName.value=name.textContent;
  popupJob.value=job.textContent;
  //отрисовываем попап
  popupContainer.append(profileElement);
  openPopup(popupContainer);
  //оживляем кнопку "сохранить"
  const form=profileElement.querySelector('.popup__form');
  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    //данные из формы вставляем в страницу
    name.textContent=popupName.value;
    job.textContent=popupJob.value;
    //закрываем попап
    closePopup(profileElement, popupContainer);
  });
  //оживить кнопку "закрыть попап"
  activateClosingButton(profileElement, popupContainer);
});

function initCard(link, name) {
  //создать шаблон карточки
  const cardTemplate=document.querySelector('#card').content;
  const cardElement=cardTemplate.querySelector('.element').cloneNode(true);
  //вставить в шаблон значения из массива или формы
  cardElement.querySelector('.element__image').setAttribute('src', link);
  cardElement.querySelector('.element__title').textContent=name;
  //оживить кнопку "открыть карточку"
  const cardImage=cardElement.querySelector('.element__image');
  cardImage.addEventListener('click', function() {
    //создать шаблон popupCardImage
    const popupCardTemplate=document.querySelector('#popupCardImage').content;
    const popupCardElement=popupCardTemplate.querySelector('.popup-card__container').cloneNode(true);
    //вставить в попап значения из карточки
    popupCardElement.querySelector('.popup-card__image').setAttribute('src', link);
    popupCardElement.querySelector('.popup-card__place').textContent=name;
    popupCardContainer.append(popupCardElement);
    //показать попап
    openPopup(popupCardContainer);
    //оживить кнопку "закрыть попап"
    activateClosingButton(popupCardElement, popupCardContainer);
  });
  //оживить кнопку "лайкнуть карточку"
  activateLike(cardElement);
  //оживить кнопку "удалить карточку"
  activateDump(cardElement);
  //вставить карточку в контейнер
  cardContainer.append(cardElement);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(template, popup) {
  //удаляю шаблон из попапа
  template.remove();
  //скрываю попап
  popup.classList.remove('popup_opened');
}

function activateClosingButton(card, popup) {
  //оживить кнопку "закрыть попап"
  const closingButton = card.querySelector('.popup__close');
    closingButton.addEventListener('click', function() {
      //закрыть попап
      closePopup(card, popup);
  });
}

function activateLike(card) {
  const likeCard = card.querySelector('.element__like');
    likeCard.addEventListener('click', function(evt) {
      evt.target.classList.toggle('element__like_active');
    });
}

function activateDump(card) {
  const deleteButton = card.querySelector('.element__delete');
  deleteButton.addEventListener('click', function() {
    card.remove();
  });
}






