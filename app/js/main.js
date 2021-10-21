

$(document).ready(function () {
   var _Seconds;

   //ВВод в инпут номер страхового полиса 
   $('.js-input-track').on('keyup', function () {
      var val = $(this).val();
      if (val != '') {
         $('.js-btn-track').prop('disabled', false);
      } else {
         $('.js-btn-track').prop('disabled', true);
      }
   });
   //ВВод в инпут номер страхового полиса конец

   $('.js-btn-track').on('click', function () {
      var btn = $(this);
      var block = btn.closest('.policy-num');
      if (block.find('input.input').val() != '') {
         block.addClass('success');
         if (btn.hasClass('input__search-icon')) {
            $('.detailed-info').removeClass('open');
            $('.js-btn-details').prop('disabled', false);
            $('.js-input-pasport').val('');
            $('.js-btn-popup').prop('disabled', true);
            $('.polis-info').removeClass('open');
         }
      }
   });

   $('.js-btn-search').on('click', function () {
      $('.js-btn-track').prop('disabled', true);
      $('.js-btn-popup').prop('disabled', true);
      $('.js-btn-details').prop('disabled', false);
      $('.detailed-info').removeClass('open');
      $('.detailed-info').find('input.input').val('');
      $('.polis-info').removeClass('open');
   });


   $('.js-btn-details').on('click', function () {
      $('.detailed-info').addClass('open');
      $(this).prop('disabled', true);
   });

   //ВВод в инпут номер паспорта
   $('.js-input-pasport').on('keyup', function () {
      var val = $(this).val();
      if (val != '') {
         $('.js-btn-popup').prop('disabled', false);
      } else {
         $('.js-btn-popup').prop('disabled', true);
      }
   });
   //ВВод в инпут номер паспорта конец

   //Ввод в инпут логин
   $('.js-input-login').on('keyup', function () {
      var valLogin = $('.js-input-log').val();
      var valPass = $('.js-input-pass').val();
      if (valLogin != '' && valPass != '') {
         $('.js-btn-log').prop('disabled', false);
      } else {
         $('.js-btn-log').prop('disabled', true);
      }
   });
   //ВВод в инпут логин конец

   //Ввод в инпут логин через номер
   $('.js-input-login-phone-num').on('keyup', function () {
      var val = $(this).val();
      if (val != '') {
         $('.js-btn-login-phone-num').prop('disabled', false);
      } else {
         $('.js-btn-login-phone-num').prop('disabled', true);
      }
   });
   //ВВод в инпут логин через номер конец

   // открыть блок в вводом смс
   $('.js-btn-login-phone-num').on('click', function () {
      var btn = $(this);
      $(this).closest('.tab-phone-num__num-block').hide();
      btn.closest('.tab-phone-num__body').find('.tab-phone-num__sms-block').show();
   });
   // открыть блок в вводом смс конец

   //Ввод в инпут код подтверждения
   $('.js-input-sms').on('keyup', function () {
      var val = $(this).val();
      if (val != '') {
         $('.js-btn-sms').prop('disabled', false);
      } else {
         $('.js-btn-sms').prop('disabled', true);
      }
   });
   //Ввод в инпут код подтверждения конец

   //открыть попап
   $('.js-btn-popup').on('click', function () {
      var btn = $(this);
      var input = btn.closest('.detailed-info__container').find('input.input');
      if (input.val() != '') {
         $('.js-btn-sms').prop('disabled', true);
         $('.popup-sms').show().addClass('open');
         _Seconds = 30;
         $('.popup-sms__text span').text(_Seconds);
         timer(_Seconds);
      }
   });
   //открыть попап конец

   //закрыть попап
   $('.js-popup-close').on('click', function () {
      $(this).closest('.popup').hide().removeClass('open');
      $(this).closest('.popup').find('input.js-input-code').val('');
   });
   //закрыть попап конец

   //нажатие вне попапа
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".js-btn-popup").length && !$(e.target).closest(".popup__content").length) {
         $('.popup').hide().removeClass('open');
         $('.popup').find('input.js-input-code').val('');
      }
      e.stopPropagation();
   });
   //нажатие вне попапа конец

   //ВВод в инпут кода с смс
   $('.js-input-code').on('keyup', function () {
      var val = $(this).val();
      if (val != '') {
         $('.js-btn-sms').prop('disabled', false);
      } else {
         $('.js-btn-sms').prop('disabled', true);
      }
   });
   //Ввлд в инпут кода с смс конец

   //получить информацию
   $('.js-btn-sms').on('click', function () {
      $(this).closest('.popup').hide().removeClass('open');
      $(this).closest('.popup').find('input.js-input-code').val('');
      $('.detailed-info').removeClass('open');
      $('.polis-info').addClass('open');
   });
   //получить информацию конец

   // табы start

   $('.js-tab-trigger').click(function () {
      var id = $(this).attr('data-tab'),
         content = $('.js-tab-content[data-tab="' + id + '"]');

      $('.js-tab-trigger.active').removeClass('active');
      $(this).addClass('active');

      $('.js-tab-content.active').removeClass('active');
      content.addClass('active');
   });

   // табы end

   // реакция бг на движение мыши
   function introMouseMove() {
      const introSection = document.querySelector('.main');
      const elements = document.querySelectorAll('.track-down__bg');




      introSection.addEventListener('mousemove', (e) => {

         elements.forEach(el => {
            el.style.transform = `translate(${e.pageX / 100 + 'px'}, ${e.pageY / 100 + 'px'})`;

            // el.style.transform = e.pageX / 50 + 'px';
            // el.style.transform = e.pageY / 50 + 'px';
         })

      });

   }
   // реакция бг на движение мыши конец
   introMouseMove();



})
function changeThemeColor() {
   const themeColors = ['#F2BD00', '#00CA45', '#F44336'];
   // const themeFavicons = ['img/favicons/yellow-fav.ico', 'img/favicons/green-fav.ico', 'img/favicons/red-fav.ico'];
   const link = document.querySelector('link[rel*="icon"]');
   const flReload = localStorage.getItem('is_reloaded');
   let flNumberTheme = localStorage.getItem('number-theme');

   console.log(flNumberTheme);

   if (flReload) {
      // link.href = themeFavicons[+flNumberTheme];
      document.querySelector('html').style.setProperty('--theme-color', themeColors[+flNumberTheme]);
      localStorage.setItem('number-theme', ++flNumberTheme);
   }

   if (flNumberTheme > themeColors.length) {
      // link.href = 'img/favicons/blue-fav.ico';
      localStorage.removeItem('number-theme', 0);
      document.querySelector('html').style.setProperty('--theme-color', '#15499F');
   }

   localStorage.setItem('is_reloaded', true);
}
changeThemeColor();

// timer
function timer(_Seconds) {
   if ($('.popup-sms').hasClass('open')) {
      if (_Seconds == 0) {
         //  alert('End!');
      } else {
         setTimeout(function () {
            _Seconds--;
            $('.popup-sms__text span').text(_Seconds);
            timer(_Seconds);
         }, 1000);
      }
   } else {
      $('.popup-sms__text span').text(30);
      return;
   }

}
//timer end

// маска для ввода номера

$.fn.setCursorPosition = function (pos) {
   if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
   } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
   }
};


$("#phone").click(function () {
   $(this).setCursorPosition(3);
}).mask("+380 (99) 999-9999");

// маска для ввода номера конец
