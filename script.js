let closingButton = document.querySelector('.popup__close');
let openingButton = document.querySelector('.profile__edit-button');
let openingPopup = document.querySelector('.popup');

function closePopup() {
    openingPopup.classList.remove('popup_opened');
}

function openPopup() {
    openingPopup.classList.add('popup_opened');
}

closingButton.addEventListener('click', closePopup);
openingButton.addEventListener('click', openPopup);

let formElement = document.querySelector('.popup__container');
let nameInputForm = document.querySelector('.popup__text_type_heading');
let jobInputForm = document.querySelector('.popup__text_type_title');
let nameInput = document.querySelector('.profile__header');
let jobInput = document.querySelector('.profile__title');

function renderProfile(evt) {
    evt.preventDefault();
    nameInput.textContent=nameInputForm.value;
    jobInput.textContent=jobInputForm.value;
    closePopup();
}

formElement.addEventListener('submit', renderProfile);
