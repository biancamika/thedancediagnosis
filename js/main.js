//initialization
    $(document).ready(function(){
        function fullPageInit() {
          $('#fullpage').fullpage({
            navigation: true,
            menu: '#menu',
            anchors:['page1','page2', 'page3'],
          });
        };

        fullPageInit();
      
        $(document).on('click', '#addSection', function(){
      
          if($('#question1').length) {
            $('#question1').remove();
          }
      
          $('#home').after('<div class="section" id="question1"></div>');
          $('#question1').load('question.html');
      
          $.fn.fullpage.reBuild();
      
          var activeSec = $('.fp-section.active').index();
      
          $.fn.fullpage.destroy('all');
      
          $('.section').eq(activeSec).addClass('active');
      
          $('#question1').fadeIn('normal', function(){
              setTimeout(function(){
                  fullPageInit();
                  $.fn.fullpage.moveSectionDown();
              }, 0);
          });
      
        });
      
      });

