

// Слайдер >>>

$('.js-gallery-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    dotsClass: 'slider__dots'
});

// Слайдер <<<



// Всплывашка регистрации >>>

class Modal {
    
    constructor(classes) {
        this.body = document.querySelector('body');
        this.scrollWidth = window.innerWidth - document.documentElement.clientWidth;
        this.layout = document.getElementsByClassName(classes.modalSelector)[0];
        this.modalActivator = document.querySelector(classes.activatorSelector);
        this.modalClass = classes.modalSelector;
        this.closeBtnClass = classes.closeBtn;
        this.modalActivator.addEventListener('click', () => this.openModal());
    }
    
    hideScroll(scrollWidth) {
        this.body.style.marginRight = `${ scrollWidth }px`;
    };
    showScroll() {
        window.setTimeout(() => {
            this.body.style.marginRight = '0';
        }, 300)
    };
    addOverflow() {
        this.body.style.overflow = 'hidden';
    }
    removeOverflow() {
        window.setTimeout(() => {
            this.body.style.overflow = 'auto';
        }, 300)
    }
    
    openModal() {
        this.addOverflow();
        if (this.scrollWidth) {
            this.hideScroll(this.scrollWidth);
        }
        this.layout.classList.remove('hidden');
        this.layout.classList.add('invisible');
        window.setTimeout(() => {
            this.layout.classList.remove('invisible');
            this.layout.classList.add('visible');
        }, 100);
        this.layout.addEventListener('click', (e) => {
            const classes = e.target.classList;
            if (classes.contains(this.modalClass) || classes.contains(this.closeBtnClass)) {
                this.closeModal();
            }
        });
    }
    
    closeModal() {
        this.showScroll();
        this.removeOverflow();
        this.layout.classList.remove('visible');
        this.layout.classList.add('invisible');
        window.setTimeout(() => {
            this.layout.classList.remove('invisible');
            this.layout.classList.add('hidden');
        }, 100);
    }
}


const modalClasses = {
    modalSelector: "modal__layout",
    activatorSelector: ".header__register-btn",
    closeBtn: "js-close"
};

const modalRegistration = new Modal(modalClasses);

// Всплывашка регистрации <<<



// Выползающее меню >>>

class Menu extends Modal {
    
    constructor(classes) {
        super(classes);
        this.menu = document.querySelector(classes.menuSelector);
        this.open = false;
        this.links = document.querySelectorAll('.header__nav-anchor');
        this.links.forEach((el) => {
            el.addEventListener('click', () => this.closeModal());
        })
    }
    
    openModal() {
        this.open = true;
        this.addOverflow();
        if (this.scrollWidth) {
            this.hideScroll(this.scrollWidth);
        }
        this.layout.classList.remove('hidden');
        this.layout.classList.add('invisible');
        this.layout.classList.add('unhidden');
        this.menu.classList.add('header__nav--shown');
        window.setTimeout(() => {
            this.layout.classList.remove('invisible');
            this.layout.classList.add('visible');
        }, 100);
        this.layout.addEventListener('click', (e) => {
            const classes = e.target.classList;
            if (classes.contains(this.modalClass) || classes.contains(this.closeBtnClass)) {
                this.closeModal();
            }
        });
    }
    
    closeModal() {
        this.open = false;
        this.showScroll();
        this.removeOverflow();
        this.layout.classList.remove('visible');
        this.layout.classList.remove('unhidden');
        this.layout.classList.add('invisible');
        this.menu.classList.remove('header__nav--shown');
        window.setTimeout(() => {
            this.layout.classList.remove('invisible');
            this.layout.classList.add('hidden');
        }, 100);
    }
}


const menuClasses = {
    modalSelector: "header__layout",
    menuSelector: ".header__nav",
    activatorSelector: ".header__menu-btn",
    closeBtn: "js-close"
};

const menu = new Menu(menuClasses);


window.addEventListener('resize', () => {
    if (screen.width > 600 && menu.open) {
        menu.closeModal();
    }
});

// Выползающее меню <<<
