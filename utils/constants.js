//массив с фотографиями и названиями мест
export const initialCards = [
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

  export const cardListSelector = '.elements';
  export const popupEditprofileSelector = '.popup_type_edit';
  export const popupAddCardSelector = '.popup_type_add';
  export const editButton = document.querySelector('.profile__edit-button');
  export const overlayList = Array.from(document.querySelectorAll('.popup'));
  export const addButton = document.querySelector('.profile__add-button');
  export const popupCardImageSelector = '.popup_type_card';
  export const popupImage = document.querySelector('.popup__image');
  export const popupPlace = document.querySelector('.popup__place');
  export const editForm = document.querySelector('.form_type_edit');
  export const popupAddCardForm = document.querySelector('.form_type_add');