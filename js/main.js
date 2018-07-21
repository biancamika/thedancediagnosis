//initialization
    $(document).ready(function(){
        function fullPageInit() {
          $('#fullpage').fullpage({
            //navigation
            navigation: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            menu: '#menu',
            anchors:['page1','page2', 'page3'],
            //scrolling
            scrollHorizontally: true,
            scrollOverflow: true,
          });
        };

        fullPageInit();
      
        $(document).on('click', '#addSection', function(){
      
          if($('#question1').length) {
            $('#question1').remove();
          }
      
          $('#home').after('<div class="section"><div id="instructions" class="slide"></div><div id="question1" class="slide">hello</div></div>');
          $('#instructions').load('instructions.html');
          $('#question1').load('question1.html');
          
      
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

