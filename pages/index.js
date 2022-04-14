import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';
import {
  cardListSelector,
  popupEditprofileSelector,
  popupAddCardSelector,
  editButton,
  addButton,
  popupCardImageSelector,
  editForm,
  popupAddCardForm,
  validationConfig,
  namePopup,
  aboutPopup,
  popupDeleteCardSelector,
  popupCardId,
  profileAvatarButton,
  popupAvatarSelector,
  avatarForm
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
  const card = new Card(item, '#card', {
    handleCardClick: (link, name) => {
      popupWithImage.open(link, name);
    },
    deleteCard: (cardId) => {
      popupCardId.value = cardId;
      popupDeleteCard.open();
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

api.getUserCard()
  .then((item) => {
    user.setUserInfo(item);
  })
  .catch((err) => {
    console.log(err);
  });

api.getInitialsCard()
  .then((item) => {
    cardList.renderItems(item);
  })
  .catch((err) => {
    console.log(err);
  });

const popupWithImage = new PopupWithImage(popupCardImageSelector);
popupWithImage.setEventListeners();

const popupEditProfile = new PopupWithForm({
  submit: (item) => {
    popupEditProfile.renderLoading(true);
    api.setUserCard(item)
      .then((item) => {
        user.setUserInfo(item);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.close();
        popupEditProfile.renderLoading(false);
      });
  }
}
, popupEditprofileSelector);

const popupDeleteCard = new PopupWithForm({
  submit: (item) => {
    api.deleteCard(item.cardId)
      .then(() => {
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
, popupDeleteCardSelector);

popupDeleteCard.setEventListeners();

popupEditProfile.setEventListeners();

editButton.addEventListener('click', () => {
  const userInfo = user.getUserInfo();
  namePopup.value = userInfo.name;
  aboutPopup.value = userInfo.about;
  popupEditProfile.open();
});

const popupAddCard = new PopupWithForm({
  submit: (item) => {
    popupAddCard.renderLoading(true);
    api.addCard(item)
      .then((item) => {
        const cardElement = createCard(item);
        cardList.setItem(cardElement); 
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.close();
        popupAddCard.renderLoading(false);
      });
  }
}, popupAddCardSelector);

popupAddCard.setEventListeners();
addButton.addEventListener('click', () => {
  formCardValidator.toggleButtonState();
  popupAddCard.open();
});


profileAvatarButton.addEventListener('click', () => {
  popupAddAvatar.open();
});

const popupAddAvatar = new PopupWithForm({
  submit: (item) => {
    popupAddAvatar.renderLoading(true);
    api.setAvatar(item.link)
      .then((item) => {
        user.setUserInfo(item);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddAvatar.close();
        popupAddAvatar.renderLoading(false);
      });
  }  
}, popupAvatarSelector);
popupAddAvatar.setEventListeners();


const formProfileValidator = new FormValidator(validationConfig, editForm);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, popupAddCardForm);
formCardValidator.enableValidation();

const formAvatarValidator = new FormValidator(validationConfig, avatarForm);
formAvatarValidator.enableValidation();