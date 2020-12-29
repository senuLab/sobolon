$(document).ready(function() {
    $('.drawer').drawer();

    $('.p-header__nav-link').click(function () {

      let header = $(".l-header").outerHeight(); 
      /* let speed = 300; */
      let id = $(this).attr("href");
      let position = $(id).offset().top - header;
  
      $('body,html').animate({
        scrollTop: position
      }, 300);
      return false;
    });
  
    let $form = $(".js-form");
  
    //console.log($form);
  
    $form.submit(function() { 
    //$(".js-form").submit(function() { 
      $.ajax({ 
       url: $form.attr('action'), 
       data: $form.serialize(), 
       type: "POST", 
       dataType: "xml", 
       statusCode: { 
          0: function() { 
            //送信に成功したときの処理 
            $form.slideUp();
            $(".js-success").slideDown();
          }, 
          200: function() { 
            //送信に失敗したときの処理 
            $form.slideUp();
            $(".js-error").slideDown();
          } 
        } 
      });
      return false; 
    });

    let $button = $(".js-button");

    //console.log($(".p-contact__input"));

    let $input = $(".p-contact__input");

    $input.on("change",function(){

        if($(".p-contact__name").val() !== "" &&
        $(".p-contact__email").val() !== "" &&
        $(".p-contact__detail").val() !== "" &&
        $(".p-contact__checkbox").prop("checked") === true
        ){
          $button.prop("disabled",false);
          $button.addClass("p-contact__button--is-active");
          console.log("comp");
        }
        else{
          $button.prop("disabled",true);
          $button.removeClass("p-contact__button--is-active");
          console.log("yet");
        }
      
    });
  });

  new WOW().init();





