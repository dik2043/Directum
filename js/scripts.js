"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Слайдер >>>
$('.js-gallery-slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  dotsClass: 'slider__dots'
}); // Слайдер <<<
// Всплывашка регистрации >>>

var Modal =
/*#__PURE__*/
function () {
  function Modal(classes) {
    var _this = this;

    _classCallCheck(this, Modal);

    this.body = document.querySelector('body');
    this.scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    this.layout = document.getElementsByClassName(classes.modalSelector)[0];
    this.modalActivator = document.querySelector(classes.activatorSelector);
    this.modalClass = classes.modalSelector;
    this.closeBtnClass = classes.closeBtn;
    this.modalActivator.addEventListener('click', function () {
      return _this.openModal();
    });
  }

  _createClass(Modal, [{
    key: "hideScroll",
    value: function hideScroll(scrollWidth) {
      this.body.style.marginRight = "".concat(scrollWidth, "px");
    }
  }, {
    key: "showScroll",
    value: function showScroll() {
      var _this2 = this;

      window.setTimeout(function () {
        _this2.body.style.marginRight = '0';
      }, 300);
    }
  }, {
    key: "addOverflow",
    value: function addOverflow() {
      this.body.style.overflow = 'hidden';
    }
  }, {
    key: "removeOverflow",
    value: function removeOverflow() {
      var _this3 = this;

      window.setTimeout(function () {
        _this3.body.style.overflow = 'auto';
      }, 300);
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var _this4 = this;

      this.addOverflow();

      if (this.scrollWidth) {
        this.hideScroll(this.scrollWidth);
      }

      this.layout.classList.remove('hidden');
      this.layout.classList.add('invisible');
      window.setTimeout(function () {
        _this4.layout.classList.remove('invisible');

        _this4.layout.classList.add('visible');
      }, 100);
      this.layout.addEventListener('click', function (e) {
        var classes = e.target.classList;

        if (classes.contains(_this4.modalClass) || classes.contains(_this4.closeBtnClass)) {
          _this4.closeModal();
        }
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var _this5 = this;

      this.showScroll();
      this.removeOverflow();
      this.layout.classList.remove('visible');
      this.layout.classList.add('invisible');
      window.setTimeout(function () {
        _this5.layout.classList.remove('invisible');

        _this5.layout.classList.add('hidden');
      }, 100);
    }
  }]);

  return Modal;
}();

var modalClasses = {
  modalSelector: "modal__layout",
  activatorSelector: ".header__register-btn",
  closeBtn: "js-close"
};
var modalRegistration = new Modal(modalClasses); // Всплывашка регистрации <<<
// Выползающее меню >>>

var Menu =
/*#__PURE__*/
function (_Modal) {
  _inherits(Menu, _Modal);

  function Menu(classes) {
    var _this6;

    _classCallCheck(this, Menu);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, classes));
    _this6.menu = document.querySelector(classes.menuSelector);
    _this6.open = false;
    _this6.links = document.querySelectorAll('.header__nav-anchor');

    _this6.links.forEach(function (el) {
      el.addEventListener('click', function () {
        return _this6.closeModal();
      });
    });

    return _this6;
  }

  _createClass(Menu, [{
    key: "openModal",
    value: function openModal() {
      var _this7 = this;

      this.open = true;
      this.addOverflow();

      if (this.scrollWidth) {
        this.hideScroll(this.scrollWidth);
      }

      this.layout.classList.remove('hidden');
      this.layout.classList.add('invisible');
      this.layout.classList.add('unhidden');
      this.menu.classList.add('header__nav--shown');
      window.setTimeout(function () {
        _this7.layout.classList.remove('invisible');

        _this7.layout.classList.add('visible');
      }, 100);
      this.layout.addEventListener('click', function (e) {
        var classes = e.target.classList;

        if (classes.contains(_this7.modalClass) || classes.contains(_this7.closeBtnClass)) {
          _this7.closeModal();
        }
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      var _this8 = this;

      this.open = false;
      this.showScroll();
      this.removeOverflow();
      this.layout.classList.remove('visible');
      this.layout.classList.remove('unhidden');
      this.layout.classList.add('invisible');
      this.menu.classList.remove('header__nav--shown');
      window.setTimeout(function () {
        _this8.layout.classList.remove('invisible');

        _this8.layout.classList.add('hidden');
      }, 100);
    }
  }]);

  return Menu;
}(Modal);

var menuClasses = {
  modalSelector: "header__layout",
  menuSelector: ".header__nav",
  activatorSelector: ".header__menu-btn",
  closeBtn: "js-close"
};
var menu = new Menu(menuClasses);
window.addEventListener('resize', function () {
  if (screen.width > 600 && menu.open) {
    menu.closeModal();
  }
}); // Выползающее меню <<<