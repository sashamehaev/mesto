(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=o.handleCardClick,a=o.deleteCard,c=o.addLike,u=o.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._userId=n,this._name=e.name,this._ownerId=e.owner._id,this._link=e.link,this._likes=e.likes,this._cardId=e._id,this._cardSelector=r,this._handleCardClick=i,this._deleteCard=a,this._addLike=c,this._deleteLike=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){if(this._element=this._getTemplate(),this._ownerId!==this._userId){var e=this._element.querySelector(".element__delete");e.setAttribute("disabled",!0),e.classList.add("element__delete_hidden")}this._renderLike(),this._setEventListeners();var t=this._element.querySelector(".element__image");return t.src=this._link,t.alt=this._name,this._element.querySelector(".element__title").textContent=this._name,this._element.querySelector(".element__like-value").textContent=this._likes.length,this._element}},{key:"_handleLikeClick",value:function(){this._findMyLike()?(this._deleteLike(this._cardId),this._element.querySelector(".element__like").classList.remove("element__like_active")):(this._addLike(this._cardId),this._element.querySelector(".element__like").classList.add("element__like_active"))}},{key:"_renderLike",value:function(){this._findMyLike()&&this._element.querySelector(".element__like").classList.add("element__like_active")}},{key:"_findMyLike",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"getLikefromApi",value:function(e){this._likes=e.likes,this._element.querySelector(".element__like-value").textContent=this._likes.length}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._link,e._name)})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._deleteCard(e._cardId,e._element)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"setItem",value:function(e){this._container.append(e)}},{key:"inputCard",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup")&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submit=r,n._form=n._popup.querySelector(".form"),n._submitButton=n._form.querySelector(".form__button"),n}return t=a,(n=[{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"close",value:function(){u(p(a.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".form__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submit(e._getInputValues())})),u(p(a.prototype),"setEventListeners",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupPlace=t._popup.querySelector(".popup__place"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupPlace.textContent=t,y(k(a.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function O(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function a(e,t){var n,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._submit=r,n._form=n._popup.querySelector(".form"),n._submitButton=n._form.querySelector(".form__button"),n}return t=a,(n=[{key:"open",value:function(e,t){this._cardToRemove=t,this._cardId=e,L(j(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var e=this;this._submitButton.addEventListener("click",(function(t){t.preventDefault(),e._submit(e._cardId,e._cardToRemove)})),L(j(a.prototype),"setEventListeners",this).call(this)}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setEventListener",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListener()}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.baseUrl,r=t.headers,o=t.renderCards;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._authorization=r.authorization,this._renderCards=o}var t,n;return t=e,(n=[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._authorization}}).then((function(t){return e._getResponse(t)}))}},{key:"getInitialsCard",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._authorization}}).then((function(t){return e._getResponse(t)}))}},{key:"setUserCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return t._getResponse(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return t._getResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return t._getResponse(e)}))}},{key:"setAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponse(e)}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),z={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},x=document.querySelector(".profile__edit-button"),A=document.querySelector(".profile__container-avatar"),D=document.querySelector(".profile__add-button"),V=document.querySelector(".form_type_edit"),M=document.querySelector(".form_type_add"),N=document.querySelector(".form_type_avatar"),J=document.querySelector(".form__input_type_name"),H=document.querySelector(".form__input_type_job"),F=new B({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"3e27aa7f-a648-4c77-8502-164493533056","Content-Type":"application/json"}}),G=new q({nameSelector:".profile__name",aboutSelector:".profile__job",avatarSelector:".profile__avatar"}),K=new r({renderer:function(e){var t=Q(e);K.setItem(t)}},".elements"),Q=function(e){var n=new t(e,re,"#card",{handleCardClick:function(e,t){W.open(e,t)},deleteCard:function(e,t){Y.open(e,t)},addLike:function(e){F.addLike(e).then((function(e){n.getLikefromApi(e)})).catch((function(e){console.log(e)}))},deleteLike:function(e){F.deleteLike(e).then((function(e){n.getLikefromApi(e)})).catch((function(e){console.log(e)}))}});return n.generateCard()},W=new g(".popup_type_card"),X=new h({submit:function(e){X.renderLoading(!0),F.setUserCard(e).then((function(e){G.setUserInfo(e),X.close()})).catch((function(e){console.log(e)})).finally((function(){X.renderLoading(!1)}))}},".popup_type_edit"),Y=new P({submit:function(e,t){F.deleteCard(e).then((function(){Y.close(),t.remove()})).catch((function(e){console.log(e)}))}},".popup_type_delete"),Z=new h({submit:function(e){Z.renderLoading(!0),F.addCard(e).then((function(e){var t=Q(e);K.inputCard(t),Z.close()})).catch((function(e){console.log(e)})).finally((function(){Z.renderLoading(!1)}))}},".popup_type_add"),$=new h({submit:function(e){$.renderLoading(!0),F.setAvatar(e.link).then((function(e){G.setUserInfo(e),$.close()})).catch((function(e){console.log(e)})).finally((function(){$.renderLoading(!1)}))}},".popup_type_avatar"),ee=new T(z,V),te=new T(z,M),ne=new T(z,N);A.addEventListener("click",(function(){$.open()})),D.addEventListener("click",(function(){te.toggleButtonState(),Z.open()})),x.addEventListener("click",(function(){var e=G.getUserInfo();J.value=e.name,H.value=e.about,X.open()})),$.setEventListeners(),Z.setEventListeners(),Y.setEventListeners(),X.setEventListeners(),W.setEventListeners(),ee.enableValidation(),te.enableValidation(),ne.enableValidation();var re="";F.getUserInfo().then((function(e){G.setUserInfo(e),re=e._id,F.getInitialsCard().then((function(e){K.renderItems(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})();