

$(document).ready(function(){
   var _Seconds;

   //ВВод в инпут номер страхового полиса 
   $('.js-input-track').on('keyup',function(){
      var val = $(this).val();
      if(val != ''){
         $('.js-btn-track').prop('disabled',false);
      }else{
         $('.js-btn-track').prop('disabled',true);
      }
      });
   //ВВод в инпут номер страхового полиса конец

   $('.js-btn-track').on('click',function(){
      var btn = $(this);
      var block = btn.closest('.policy-num');
      if(block.find('input.input').val() != ''){
         block.addClass('success');
         if(btn.hasClass('input__search-icon')){
            $('.detailed-info').removeClass('open');
            $('.js-btn-details').prop('disabled',false);
            $('.js-input-pasport').val('');
            $('.js-btn-popup').prop('disabled',true);
            $('.polis-info').removeClass('open');
         }
      }
   })

   $('.js-btn-search').on('click',function(){
      $('.js-btn-track').prop('disabled',true);
      $('.js-btn-popup').prop('disabled',true);
      $('.js-btn-details').prop('disabled',false);
      $('.detailed-info').removeClass('open');
      $('.detailed-info').find('input.input').val('');
      $('.polis-info').removeClass('open');
   })


   $('.js-btn-details').on('click',function(){
      $('.detailed-info').addClass('open');
      $(this).prop('disabled',true);
   })

   //ВВод в инпут номер паспорта
   $('.js-input-pasport').on('keyup',function(){
      var val = $(this).val();
      if(val != ''){
         $('.js-btn-popup').prop('disabled',false);
      }else{
         $('.js-btn-popup').prop('disabled',true);
      }
      });
   //ВВод в инпут номер паспорта конец

   //открыть попап
   $('.js-btn-popup').on('click',function(){
      var btn = $(this);
      var input = btn.closest('.detailed-info__container').find('input.input');
      if(input.val() != ''){
         $('.js-btn-sms').prop('disabled',true);
         $('.popup-sms').show().addClass('open');
         _Seconds = 30;
         $('.popup-sms__text span').text(_Seconds);
         timer(_Seconds);
      }
   })
   //открыть попап конец

   //закрыть попап
   $('.js-popup-close').on('click',function(){
      $(this).closest('.popup').hide().removeClass('open');
      $(this).closest('.popup').find('input.js-input-code').val('');
   })
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
   $('.js-input-code').on('keyup',function(){
      var val = $(this).val();
      if(val != ''){
         $('.js-btn-sms').prop('disabled',false);
      }else{
         $('.js-btn-sms').prop('disabled',true);
      }
    });
   //Ввлд в инпут кода с смс конец

   //получить информацию
   $('.js-btn-sms').on('click',function(){
      $(this).closest('.popup').hide().removeClass('open');
      $(this).closest('.popup').find('input.js-input-code').val('');
      $('.detailed-info').removeClass('open');
      $('.polis-info').addClass('open');
   })
   //получить информацию конец

})



// timer
function timer(_Seconds){
   if($('.popup-sms').hasClass('open')){
      if(_Seconds == 0)
      {
         //  alert('End!');
      } else {
         setTimeout(function()
         {
            _Seconds--;
            $('.popup-sms__text span').text(_Seconds);
            timer(_Seconds);
         }, 1000);
      }
   }else{
      $('.popup-sms__text span').text(30);
      return;
   }

}
//timer end