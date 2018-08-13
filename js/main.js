//initialization
    $(document).ready(function(){
        function fullPageInit() {
          $('#fullpage').fullpage({
            //navigation
            navigation: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            menu: '#menu',
            anchors:['page1','page2', 'page3', 'page4', 'page5'],
            //scrolling
            scrollOverflow: true,
            //design
            controlArrows: false,
          });
        };
        
        fullPageInit();
        //aedincodestart
        var ultimateArray;
        var attributeSums;
        var attributeTotals;
        var numberOfClasses = 4;
        var bestAttributelist;
        
        
        var possibleOutcomes = [
            [
                [
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>NOTHING?</h1><p>You are either a flawless human being or you just forgot to click a checkbox.</p>", //0000
                    "<p>YOU NEED TO WORK ON:</p><h1>CARDIOVASCULAR ENDURANCE/h1><p>You tire too easily.</p>"  //0001
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR STRENGTH</h1><p>You need to be strong enough to execute moves correctly.</p>", //0010
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p>Not only do you tire easily, but you also lack the strength to do the moves properly.</p>"  //0011
                    ]
                ],
                [
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR ENDURANCE</h1><p>You may be strong, but your muscles easily get fatigue. </p>", //0100
                    ""  //0101
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR ENDURANCE & STRENGTH</h1><p>You need strength to both execute and endure choreography!</p>", //0110
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR ENDURANCE, STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p> You need to work on a lot lmao </p>"  //0111
                    ]
                ]
            ],
            [
                [
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY</h1><p>You are already strong and stable, but you need to increase your body's range of motion.</p>", //1000
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY & CARDIOVASCULAR ENDURANCE</h1><p>Your muscles are doing fine, but you need to increase both your body's range of motion and its stamina.</p>"  //1001
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY & MUSCULAR STRENGTH</h1><p>You may have great stamina, but your body needs to increase its strength and its range of motion.</p>", //1010
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p>Yes, your muscles may last long, but your body needs to increase its range of motion, strength, and stamina.</p>"  //1011
                    ]
                ],
                [
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY & MUSCULAR ENDURANCE</h1><p>You may have strength and stamina, but your body needs to increase its range of motion and muscle stamina.</p>", //1100
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR ENDURANCE & CARDIOVASCULAR ENDURANCE</h1><p>You may have strength, but your body needs to increase its range of motion and stamina (especially for the muscles).</p>"  //1101
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR ENDURANCE & STRENGTH</h1><p>You may have stamina, but your body needs to increase its range of motion, strength, and muscle stamina.</p>", //1110
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR ENDURANCE, STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p>You need to work on everything!</p>"  //1111
                    ]
                ]
            ]
        ];
        //aedin code end
      
        $(document).on('click', '#addSection', function(){
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

        $("#result").html(possibleOutcomes[bestAttributelist[0]][bestAttributelist[1]][bestAttributelist[2]][bestAttributelist[3]]);
        //endaedin code
      
        });
  
  
});

      

      
  
