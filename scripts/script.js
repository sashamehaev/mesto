//живые элементы
const addButton = document.querySelector('.profile__add-button');


//контейнеры
const cardContainer=document.querySelector('.elements');
const popupCardContainer=document.querySelector('.popup-card');

const popup = document.querySelector('.popup');
const popupCard=document.querySelector('.popup-card');

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

//Инициализировать карточки из массива
for(let i=0; i<initialCards.length; i=i+1) {
  initCard(initialCards[i].link, initialCards[i].name);
}

//добавить карточку
addButton.addEventListener('click', function() {
  const cardTemplate=document.querySelector('#popupAddCard').content;
  const CardElement=cardTemplate.querySelector('.popup__container').cloneNode(true);
  console.log(CardElement);
  popup.append(CardElement);
  //activateClosingButton(popupCard);
  popup.classList.add('popup_opened');
  /*form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const formImage=form.querySelector('.popup__text_type_link');
    const formPlace=form.querySelector('.popup__text_type_place');
    initCard(formImage.value, formPlace.value);
    closePopup();
  });*/
});

//оживить кнопку "редактировать профиль"
const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', function() {
  //копируем html из шаблона
  const profileTemplate=document.querySelector('#popupEditProfile').content;
  const profileElement=profileTemplate.querySelector('.popup__container').cloneNode(true);
  //имя и работа, взятые со страницы
  const name=document.querySelector('.profile__name');
  const job=document.querySelector('.profile__job');
  //имя и работа, взятые с формы
  const popupName=profileElement.querySelector('.popup__text_type_name');
  const popupJob=profileElement.querySelector('.popup__text_type_job');
  //вставляем в форму данные со страницы
  popupName.value=name.textContent;
  popupJob.value=job.textContent;
  //отрисовываем попап
  popup.append(profileElement);
  openPopup(popup);
  //оживляем кнопку "сохранить"
  const form=profileElement.querySelector('.popup__form');
  form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    //данные из формы вставляем в страницу
    name.textContent=popupName.value;
    job.textContent=popupJob.value;
    //закрываем попап
    closePopup(profileElement);
  });
  //оживить кнопку "закрыть попап"
  const popupClose=profileElement.querySelector('.popup__close');
  popupClose.addEventListener('click', function() {
    //попап закрывается
    closePopup(profileElement);
  });
});

function initCard(link, name) {
  const cardTemplate=document.querySelector('#card').content;
  const cardElement=cardTemplate.querySelector('.element').cloneNode(true);
  renderCard(link, name, cardElement);
  activateImage(link, name, cardElement);
  activateLike(cardElement);
  activateDump(cardElement);
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(container) {
  //удаляю контейнер из попапа
  container.remove();
  //скрываю попап
  popup.classList.remove('popup_opened');
  
}

function renderCard(cardImage, cardPlace, card) {
  card.querySelector('.element__image').setAttribute('src', cardImage);
  card.querySelector('.element__title').textContent=cardPlace;
  cardContainer.append(card);
}

function renderPopupCard(cardLink, cardName, card) {
  card.querySelector('.popup-card__image').setAttribute('src', cardLink);
  card.querySelector('.popup-card__place').textContent=cardName;
  popupCardContainer.append(card);
  
}

function activateImage(formImage, formPlace, card) {
  const cardImage=card.querySelector('.element__image');
  cardImage.addEventListener('click', function() {
    const popupCardTemplate=document.querySelector('#popupCardImage').content;
    const popupCardElement=popupCardTemplate.querySelector('.popup-card__container').cloneNode(true);
    renderPopupCard(formImage, formPlace, popupCardElement);
    activateClosingButton(popupCardElement);
    openPopup(popupCard);
  });
}

function activateClosingButton(card) {
  const closingButton = card.querySelector('.popup__close');
    closingButton.addEventListener('click', function() {
      popupCard.classList.remove('popup_opened');
      card.remove();
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






