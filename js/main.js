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
                    "<p>YOU NEED TO WORK ON:</p><h1>NOTHING?</h1><p>You are either a flawless human being or you just forgot to click a checkbox. If you want a recommendation, try taking the test again!</p>", //0000
                    "<p>YOU NEED TO WORK ON:</p><h1>CARDIOVASCULAR ENDURANCE</h1><p>You are already strong and stable, but you tire too easily. You need to increase your stamina.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li></ul>"  //0001
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR STRENGTH</h1><p>You need to be strong enough to execute moves correctly.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li></ul>", //0010
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p>Not only do you tire easily, but you also lack the strength to do the moves properly.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li></ul>"  //0011
                    ]
                ],
                [
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR ENDURANCE</h1><p>You may be flexible, strong and stable, but your muscles easily get fatigue.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=EP5PX4REt_o'>'Tips for Performance Stamina' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=9Thui27zK78'>'STANDING PILATES' by Gone Adventuring Pilates</a></li></ul>", //0100
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR & CARDIOVASCULAR ENDURANCE</h1><p>You may be strong and flexibile, but you need stamina for both your lungs and your muscles.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=EP5PX4REt_o'>'Tips for Performance Stamina' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=9Thui27zK78'>'STANDING PILATES' by Gone Adventuring Pilates</a></li><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li></ul>"  //0101
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR ENDURANCE & STRENGTH</h1><p>You need strength to both execute and endure choreography!</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li></ul>", //0110
                    "<p>YOU NEED TO WORK ON:</p><h1>MUSCULAR ENDURANCE, STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p> You may be flexible, but your body needs to increase its strength along with muscular and lung stamina!</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=EP5PX4REt_o'>'Tips for Performance Stamina' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=9Thui27zK78'>'STANDING PILATES' by Gone Adventuring Pilates</a></li><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li></ul>"  //0111
                    ]
                ]
            ],
            [
                [
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY</h1><p>You are already strong and stable, but you need to increase your body's range of motion.</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li></ul>", //1000
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY & CARDIOVASCULAR ENDURANCE</h1><p>Your muscles are doing fine, but you need to increase both your body's range of motion and its stamina.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li></ul>"  //1001
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY & MUSCULAR STRENGTH</h1><p>You may have great stamina, but your body needs to increase its strength and its range of motion.</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li></ul>", //1010
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p>Yes, your muscles may last long, but your body needs to increase its range of motion, strength, and stamina.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li></ul>"  //1011
                    ]
                ],
                [
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY & MUSCULAR ENDURANCE</h1><p>You may have strength and stamina, but your body needs to increase its range of motion and muscle stamina.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=EP5PX4REt_o'>'Tips for Performance Stamina' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=9Thui27zK78'>'STANDING PILATES' by Gone Adventuring Pilates</a></li></ul>", //1100
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR ENDURANCE & CARDIOVASCULAR ENDURANCE</h1><p>You may have strength, but your body needs to increase its range of motion and stamina (especially for the muscles).</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=EP5PX4REt_o'>'Tips for Performance Stamina' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=9Thui27zK78'>'STANDING PILATES' by Gone Adventuring Pilates</a></li><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li></ul>"  //1101
                    ],
                    [
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR ENDURANCE & STRENGTH</h1><p>You may have stamina, but your body needs to increase its range of motion, strength, and muscle stamina.</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=EP5PX4REt_o'>'Tips for Performance Stamina' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=9Thui27zK78'>'STANDING PILATES' by Gone Adventuring Pilates</a></li><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li></ul>", //1110
                    "<p>YOU NEED TO WORK ON:</p><h1>FLEXIBILITY, MUSCULAR ENDURANCE, STRENGTH & CARDIOVASCULAR ENDURANCE</h1><p>You need to work on everything!</p><p>RECOMMENDATIONS:</p><ul><li><a href='https://www.youtube.com/watch?v=4OY8ijDhsV4&t=286s'>'How to do the splits + EFFECTIVE tips' by Alivia D'Andrea</a></li><li><a href='https://www.youtube.com/watch?v=UYMQKur1B8g'>'How To Improve Back Flexibility' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=COqhHNh5VwY'>'How to Do the Middle Split THE RIGHT WAY' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=EP5PX4REt_o'>'Tips for Performance Stamina' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=9Thui27zK78'>'STANDING PILATES' by Gone Adventuring Pilates</a></li><li><a href='https://www.youtube.com/watch?v=m6FplmaMgAI'>'Toning Back Exercises to Improve Arabesque' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=Q4JU12Mn4_E'>'Exercises for Improving Turnout' by Kathryn Morgan</a></li><li><a href='https://www.youtube.com/watch?v=nB72JqeALoE'>'Improve Feet Strength for Ballet and Dance' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=cYEKCIlobjE'>'Ballet Beautiful | Total Body Sculpt Workout' by Mary Helen Bowers</a></li><li><a href='https://www.youtube.com/watch?v=hzzJX7VRHmo'>'Ballet Cardio | 15 Minutes Total Body Workout' by Lazy Dancer Tips</a></li><li><a href='https://www.youtube.com/watch?v=kzLRJkmqv3g'>'High School Dance Cardio Endurance workout | Kinetic Bands' by Myosource Kinetic Bands</a></li><li><a href='https://www.youtube.com/watch?v=tfTCykKtE7M'>'Silent Death Cardio - Apartment friendly workout to lean down' by blogilates</a></li></ul>"  //1111
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

      

      
  
