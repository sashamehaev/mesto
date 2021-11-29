let nameInput = document.querySelector('.profile__header');
let jobInput = document.querySelector('.profile__title');
let openingButton = document.querySelector('.profile__edit-button');
let openingPopup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let closingButton = document.querySelector('.popup__close');
let nameInputForm = document.querySelector('.popup__text_type_heading');
let jobInputForm = document.querySelector('.popup__text_type_title');

function closePopup() {
    openingPopup.classList.remove('popup_opened');
    
}

function openPopup() {
    openingPopup.classList.add('popup_opened');
    nameInputForm.value=nameInput.textContent;
    jobInputForm.value=jobInput.textContent;
}

function renderProfile(evt) {
    evt.preventDefault();
    nameInput.textContent=nameInputForm.value;
    jobInput.textContent=jobInputForm.value;
    closePopup();
}

formElement.addEventListener('submit', renderProfile);
closingButton.addEventListener('click', closePopup);
openingButton.addEventListener('click', openPopup);
