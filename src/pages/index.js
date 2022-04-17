import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import {
  validationConfig,
  cardListSelector,
  popupEditProfileSelector,
  popupAddCardSelector,
  popupWithCardSelector,
  popupDeleteCardSelector,
  popupEditAvatarSelector,
  buttonEditProfile,
  buttonEditAvatar,
  buttonAddCard,
  formEditProfile,
  formAddCard,
  formEditAvatar,
  inputNamePopup,
  inputAboutPopup

} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-39',
  headers: {
    authorization: '3e27aa7f-a648-4c77-8502-164493533056',
    'Content-Type': 'application/json'
  }
});

const user = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__job',
  avatarSelector: '.profile__avatar' 
});

const cardList = new Section({ 
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.setItem(cardElement);
  }
}, cardListSelector);

const createCard = (item) => {
  const card = new Card(item, Id, '#card', {
    handleCardClick: (link, name) => {
      popupWithImage.open(link, name);
    },
    deleteCard: (cardId, card) => {
      popupDeleteCard.open(cardId, card);
    },
    addLike: (cardId) => {
      api.addLike(cardId)
      .then((res) => {
        card.getLikefromApi(res);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    deleteLike: (cardId) => {
      api.deleteLike(cardId)
      .then((res) => {
        card.getLikefromApi(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  });

  return card.generateCard();
}

const popupWithImage = new PopupWithImage(popupWithCardSelector);

const popupEditProfile = new PopupWithForm({
  submit: (item) => {
    popupEditProfile.renderLoading(true);
    api.setUserCard(item)
      .then((item) => {
        user.setUserInfo(item);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      });
  }
}
, popupEditProfileSelector);

const popupDeleteCard = new PopupWithConfirm({
  submit: (cardId, card) => {
    api.deleteCard(cardId)
      .then(() => {
        popupDeleteCard.close();
        card.remove();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
, popupDeleteCardSelector);

const popupAddCard = new PopupWithForm({
  submit: (item) => {
    popupAddCard.renderLoading(true);
    api.addCard(item)
      .then((item) => {
        const cardElement = createCard(item);
        cardList.inputCard(cardElement);
        popupAddCard.close(); 
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.renderLoading(false);
      });
  }
}, popupAddCardSelector);

const popupEditAvatar = new PopupWithForm({
  submit: (item) => {
    popupEditAvatar.renderLoading(true);
    api.setAvatar(item.link)
      .then((item) => {
        user.setUserInfo(item);
        popupEditAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditAvatar.renderLoading(false);
      });
  }
}, popupEditAvatarSelector);

const formEditProfileValidator = new FormValidator(validationConfig, formEditProfile);
const formAddCardValidator = new FormValidator(validationConfig, formAddCard);
const formEditAvatarValidator = new FormValidator(validationConfig, formEditAvatar);

buttonEditAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
});

buttonAddCard.addEventListener('click', () => {
  formAddCardValidator.toggleButtonState();
  popupAddCard.open();
});

buttonEditProfile.addEventListener('click', () => {
  const userInfo = user.getUserInfo();
  inputNamePopup.value = userInfo.name;
  inputAboutPopup.value = userInfo.about;
  popupEditProfile.open();
});

popupEditAvatar.setEventListeners();
popupAddCard.setEventListeners();
popupDeleteCard.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();

formEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditAvatarValidator.enableValidation();

let Id = '';

api.getUserInfo()
  .then((item) => {
    user.setUserInfo(item);
    Id = item._id;
    api.getInitialsCard()
      .then((item) => {
        cardList.renderItems(item);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });