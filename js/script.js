document.addEventListener('DOMContentLoaded', function () {

  const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  };

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(
        params.disabledClassName,
        params.activeClassName
      );
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(
        `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
      );

      if (
        activeElements.length &&
        !evt.target.closest(`.${params.activeClassName}`)
      ) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.dropdownpath;
        const drop = document.querySelector(
          `.${params.dropClassName}[data-dropdowntarget="${path}"]`
        );

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();




  const container = document.querySelector(".container")
  const swiperhero = new Swiper('.hero__swiper', {
    // Default parameters
    loop: true,
    effect: 'fade',
    speed: 3000,
    autoplay: {
      delay: 3000
    }

  })


  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });


  const swipergal = document.querySelector(".slides-container");
  let swiper = new Swiper(swipergal, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 50,
    speed: 605,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    breakpoints: {
      1: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      577: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
        // maxWidth: 315,
      },
      921: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        // maxWidth: 270,
      },

      1361: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    },

    a11y: {
      nextSlideMessage: 'К Следующему слайду',
      prevSlideMessage: 'К Предыдущему слайду',
      lastSlideMessage: 'Это Последний слайд',
      firstSlideMessage: 'Это первый слайд',
      paginationBulletMessage: 'Перейти к слайду номер {{index}}',
    },
    freeMode: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

  $(function () {
    $(".accordion-list").accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: 0,
    });

  });

  document.querySelectorAll('.accordion-link').forEach(function (tabsbtn) {
    tabsbtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.painterspath;

      document.querySelectorAll('.accordion-link').forEach(function (link) {
        link.classList.remove('accordion-link-active')
      });
      e.currentTarget.classList.add('accordion-link-active');
      console.log('dqq');
      document.querySelectorAll('.tab').forEach(function (tabcontent) {
        tabcontent.classList.remove('tab-active');
      });
      document.querySelector(`[data-painterstarget="${path}"]`).classList.add('tab-active');
      // document.querySelector(`[data-target="${path}"]`).scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   speed: 600
      // });
    });
  });


  const swiperevent = document.querySelector(".events-slides-container");
  let swipere = new Swiper(swiperevent, {
    slidesPerView: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 4,
    slidesPerGroup: 3,
    speed: 605,
    maxWidth: 500,
    navigation: {
      nextEl: ".events-swiper-next",
      prevEl: ".events-swiper-prev"
    },
    pagination: {
      el: '.events-pagination',
      type: 'bullets',
      clickable: true,
      freeMode: true,
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1
      },

      577: {
        slidesPerView: 2,
        spaceBetween: 34,
        pagination: {
          el: '.events-pagination',
          type: 'bullets',
          clickable: true,
          freeMode: true,
        },
        slidesPerGroup: 2
      },

      921: {
        slidesPerView: 3,
        spaceBetween: 27,
        pagination: {
          el: '.events-pagination',
          type: 'bullets',
          clickable: true,
          freeMode: true,
        },
      },

      1601: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    },

    a11y: {
      nextSlideMessage: 'К Следующему слайду',
      prevSlideMessage: 'К Предыдущему слайду',
      lastSlideMessage: 'Это Последний слайд',
      firstSlideMessage: 'Это первый слайд',
      paginationBulletMessage: 'Перейти к слайду номер {{index}}',
    },
    freeMode: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "-1";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "-1";
          }
        });
      }
    }
  });

  tippy('#tooltip', {
    content: 'Пример современных тенденций — современная методология разработки',
    theme: 'purple',
    maxWidth: 290,
  });
  tippy('#tooltip-1', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    theme: 'purple',
    maxWidth: 280,

  });
  tippy('#tooltip-2', {
    content: 'В стремлении повысить качество',
    theme: 'purple',
    maxwidth: 265,
  });

  const swiperprojects = document.querySelector(".projects-slides-container");
  let swiperpr = new Swiper(swiperprojects, {
    slidesPerView: 3,

    // loop: true,
    spaceBetween: 0,
    speed: 605,
    navigation: {
      nextEl: ".projects-nav-next",
      prevEl: ".projects-nav-prev"
    },
    loop: true,
    breakpoints: {
      1: {
        slidesPerView: 1,
        // width: 195,
        spaceBetween: 21
      },
      690: {
        // width: 546,
        spaceBetween: 34,
        slidesPerView: 2
      },
      921: {
        slidesPerView: 2,
        // width: 800,
        spaceBetween: 50
      },
      1361: {
        slidesPerView: 3,
        // width: 1450,
        spaceBetween: 50,
      }
    },
    centerInsufficientSlides: true,
    a11y: {
      nextSlideMessage: 'К Следующему слайду',
      prevSlideMessage: 'К Предыдущему слайду',
      lastSlideMessage: 'Это Последний слайд',
      firstSlideMessage: 'Это первый слайд',
      paginationBulletMessage: 'Перейти к слайду номер {{index}}',
    },
    freeMode: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visiblep",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visiblep")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visiblep")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });

  const form = document.querySelector('.contacts__form');
  const telSelector = document.querySelector('.input-tel');
  const inputmask = new Inputmask('+7 (999) 999-99-99');
  inputmask.mask(telSelector);

  const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#D11616',
      position: 'absolute',
      top: '-16px',
      left: '20px',
    },
  });

  validation
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательное!',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя слишком короткое!',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя слишком длинное!',
      },
    ])
    .addField('#tel', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательное!',
      },
      {
        rule: 'function',
        validator: (name, value) => {
          const phone = telSelector.inputmask.unmaskedvalue()
          return phone.length === 10
        },
        errorMessage: 'Неверный формат номера!',
      },
    ]);


  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.75846306898368, 37.601079499999905],
      zoom: 14,
    });

    var myPlacemark = new ymaps.Placemark([55.75846306898368, 37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/global/mark.svg',
      iconImageSize: [20, 40],
      iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  };

  class Modal {
    constructor(options) {
      let defaultOptions = {
        isOpen: () => { },
        isClose: () => { },
      }
      this.options = Object.assign(defaultOptions, options);
      this.modal = document.querySelector('.modal');
      this.speed = false;
      this.animation = false;
      this.isOpen = false;
      this.modalContainer = false;
      this.previousActiveElement = false;
      this.fixBlocks = document.querySelectorAll('.fix-block');
      this.focusElements = [
        'a[href]',
        'input',
        'button',
        'select',
        'textarea',
        '[tabindex]'
      ];
      this.events();
    }

    events() {
      if (this.modal) {
        document.addEventListener('click', function (e) {
          const clickedElement = e.target.closest('[data-path]');
          if (clickedElement) {
            let target = clickedElement.dataset.path;
            let animation = clickedElement.dataset.animation;
            let speed = clickedElement.dataset.speed;
            this.animation = animation ? animation : 'fade';
            this.speed = speed ? parseInt(speed) : 300;
            this.modalContainer = document.querySelector(`[data-target="${target}"]`);
            this.open();
            return;
          }

          if (e.target.closest('.modal-close')) {
            this.close();
            return;
          }
        }.bind(this));

        window.addEventListener('keydown', function (e) {
          if (e.keyCode == 27) {
            if (this.isOpen) {
              this.close();
            }
          }

          if (e.keyCode == 9 && this.isOpen) {
            this.focusCatch(e);
            return;
          }

        }.bind(this));

        this.modal.addEventListener('click', function (e) {
          if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
            this.close();
          }
        }.bind(this));
      }
    }

    open() {
      this.previousActiveElement = document.activeElement;

      this.modal.style.setProperty('--transition-time', `${this.speed / 1000}s`);
      this.modal.classList.add('is-open');
      this.disableScroll();

      this.modalContainer.classList.add('modal-open');
      // this.modalContainer.classList.add(this.animation);

      setTimeout(() => {
        this.options.isOpen(this);
        this.modalContainer.classList.add('animate-open');
        this.isOpen = true;
        this.focusTrap();
      }, this.speed);
    }

    close() {
      if (this.modalContainer) {
        this.modalContainer.classList.remove('animate-open');
        this.modalContainer.classList.remove(this.animation);
        this.modal.classList.remove('is-open');
        this.modalContainer.classList.remove('modal-open');

        this.enableScroll();
        this.options.isClose(this);
        this.isOpen = false;
        this.focusTrap();
      }
    }

    focusCatch(e) {
      const focusable = this.modalContainer.querySelectorAll(this.focusElements);
      const focusArray = Array.prototype.slice.call(focusable);
      const focusedIndex = focusArray.indexOf(document.activeElement);

      if (e.shiftKey && focusedIndex === 0) {
        focusArray[focusArray.length - 1].focus();
        e.preventDefault();
      }

      if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
        focusArray[0].focus();
        e.preventDefault();
      }
    }

    focusTrap() {
      const focusable = this.modalContainer.querySelectorAll(this.focusElements);
      if (this.isOpen) {
        focusable[0].focus();
      } else {
        this.previousActiveElement.focus();
      }
    }

    disableScroll() {
      let pagePosition = window.scrollY;
      this.lockPadding();
      document.body.classList.add('disable-scroll');
      document.body.dataset.position = pagePosition;
      document.body.style.top = -pagePosition + 'px';
    }

    enableScroll() {
      let pagePosition = parseInt(document.body.dataset.position, 10);
      this.unlockPadding();
      document.body.style.top = 'auto';
      document.body.classList.remove('disable-scroll');
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute('data-position');
    }

    lockPadding() {
      let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      this.fixBlocks.forEach((el) => {
        el.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset;
    }

    unlockPadding() {
      this.fixBlocks.forEach((el) => {
        el.style.paddingRight = '0px';
      });
      document.body.style.paddingRight = '0px';
    }
  }

  const modal = new Modal({
    isOpen: (modal) => {
      console.log(modal);
      console.log('opened');
    },
    isClose: () => {
      console.log('closed');
    },
  });

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  let menulinks = menu.querySelectorAll('.header__link');

  burger.addEventListener('click',

    function () {

      burger.classList.toggle('header__burger-active');

      menu.classList.toggle('header__nav-active');

      document.body.classList.toggle('stop-scroll');
    })

  menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

      burger.classList.remove('header__burger--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');

    })
  });


  document.querySelector(".header-search-open-btn").addEventListener("click", function () {
    document.querySelector(".header__search-div").classList.add('header-search-active');
    this.classList.add("header-search-opened");
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    let search = document.querySelector(".header__search-div");
    let close = document.querySelector(".header__search-close");
    if (!target.closest(".search-con")) {
      search.classList.remove('header-search-active');
      search.querySelector("input").value = "";
      document.querySelector(".header-search-open-btn").classList.remove("header-search-opened");
    };
    close.addEventListener('click', function () {
      search.classList.remove('header-search-active');
      search.querySelector("input").value = "";
      document.querySelector(".header-search-open-btn").classList.remove("header-search-opened");
      burger.classList.remove('search-768-open');
      menu.classList.remove('search-768-open');
      logo.classList.remove('search-768-open');
    });
    const mediaQuery = window.matchMedia('(max-width: 920px)');
    let logo = document.querySelector('.header__logo');

  })
});
