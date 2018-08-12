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
      
          //INSERTS NEW DIV
          $('#questions').after('<div id="result" class="section" data-anchor="page5"></div>');

          $.fn.fullpage.reBuild();
      
          var activeSec = $('.fp-section.active').index();
      
          $.fn.fullpage.destroy('all');
      
          $('.section').eq(activeSec).addClass('active');
      
        
          $('#result').fadeIn('normal', function(){
              setTimeout(function(){
                  fullPageInit();
                  $.fn.fullpage.moveSectionDown();
              }, 0);
          });
      
        });
        
        
      });

      

      
  
