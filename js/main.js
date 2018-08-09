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
            scrollOverflow: true,
            //design
            controlArrows: false,
          });
        };

        fullPageInit();
      
        $(document).on('click', '#addSection', function(){
      /*
          if($('#question1').length) {
            $('#question1').remove();
          }
          */
      
          $('#home').after('<div class="section" data-anchor="page4"><div id="instructions" class="slide" data-anchor="slide1"></div><div id="question1" class="slide" data-anchor="slide2"></div><div id="question2" class="slide" data-anchor="slide3"></div><div id="question3" class="slide" data-anchor="slide4"></div><div id="question4" class="slide" data-anchor="slide5"></div></div>');
          $('#instructions').load('instructions.html');
          $('#question1').load('question1.html');
          $('#question2').load('question2.html');
          $('#question3').load('question3.html');
          $('#question4').load('question4.html');
          
      
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

      //AEDINS CODE
      /*
      $(document).ready(function() {
        var ultimateArray;
        var attributeSums;
        var attributeTotals;
        var numberOfClasses = 4;
        var bestAttributelist;
        
        
        var possibleOutcomes = [
            [
                [
                    [
                    "You didn't select any of the checkboxes. Please try again.", //0000
                    "D-D-D-D-D-D-D!"  //0001
                    ],
                    [
                    "Are you cold? Because you chose a lot of C...", //0010
                    "You sure like CDs. But they're outdated?"  //0011
                    ]
                ],
                [
                    [
                    "Bees say buzz. B is what you have chosen a lot of.", //0100
                    ""  //0101
                    ],
                    [
                    "You chose a time long ago, in something BC.", //0110
                    "You must really have a grudge against the letter A."  //0111
                    ]
                ]
            ],
            [
                [
                    [
                    "A class-A person choosing lots of A. Or at least that\'s what you say you are.", //1000
                    "Acronym for Arts and Design: A and D. You chose this, so you must be artistic."  //1001
                    ],
                    [
                    "When you\'re really hot, you choose the AC. You must be hot right now. ", //1010
                    "Do you have a phobia of Bees? B\'s?"  //1011
                    ]
                ],
                [
                    [
                    "The first two attributes aren\'t always the best, except for you. AB is you.", //1100
                    "People who are seasick probably dislike the C. Such as you."  //1101
                    ],
                    [
                    "You know, it took like 20 minutes to add type D into this, yet you don\'t seem to like it...", //1110
                    "Choosing everything doesn\'t make you win...?"  //1111
                    ]
                ]
            ]
        ];
            
      
        $("#resultsButton").click(function() {
          ultimateArray = [0, 0, 0, 0];
          attributeSums = [0, 0, 0, 0];
          attributeTotals = [0, 0, 0, 0];
          bestAttributelist = [0,0,0, 0];
          biggest = 0;

          for (i = 0; i <= (numberOfClasses - 1); i++) {
            ultimateArray[i] = document.getElementsByClassName((i + 1));
            attributeTotals[i] = ultimateArray[i].length;
          }


          for (j = 0; j <= (ultimateArray.length - 1); j++) {
              
            for (k = 0; k <= (ultimateArray[j].length - 1); k++) {
              attributeSums[j] += (ultimateArray[j][k].checked);
            } // sums up all checked boxes in the array entry
              
            attributeSums[j] = (attributeSums[j] / attributeTotals[j]);
              // then converts into percentages, so results aren't biased towards attributes with many checkboxes
             
              
            if (attributeSums[j] > 0){
            if (attributeSums[j] > biggest) {
              biggest = attributeSums[j];
              bestAttributelist = [0,0,0,0];
              bestAttributelist[j] = 1; //if the sum of the array entry being analyzed now is bigger than the current largest sum, make that the "largest sum". 
                
            } else if (attributeSums[j] == biggest) {
                bestAttributelist[j] = 1;
               
            }
          }
          
          }
            console.log(bestAttributelist);

$("#displaybest").html(possibleOutcomes[bestAttributelist[0]][bestAttributelist[1]][bestAttributelist[2]][bestAttributelist[3]]);
           
     
        });
      }

    );
    */

      
  
