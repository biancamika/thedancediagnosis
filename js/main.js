//initialization
    $(document).ready(function(){
        function fullPageInit() {
          $('#fullpage').fullpage({
            //navigation
            navigation: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            menu: '#menu',
            anchors:['page1','page2', 'page3', 'page4'],
            //scrolling
            scrollOverflow: true,
            //design
            controlArrows: false,
          });
        };

        fullPageInit();
      
        $(document).on('click', '#addSection', function(){
          
      
          //INSERT HTML STRING IN HOME
          $('#questions').after('<div id="results" class="section" data-anchor="page5"></div>');
          /*
          $('#question1').load('question1.html');
          $('#question2').load('question2.html');
          $('#question3').load('question3.html');
          $('#question4').load('question4.html');
          */
          
      
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

      

      
  
