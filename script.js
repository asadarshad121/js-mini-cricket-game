

      let score = {
      win : 0,
      lost : 0,
      tie : 0,
      };
      
      let randomNumber = Math.random() * 3;
     
      function condition() {
        let computerChoice;
        randomNumber = Math.random() * 3;

        if (randomNumber > 0 && randomNumber <= 1) {
          computerChoice = "Bat";
        } else if (randomNumber > 1 && randomNumber <= 2) {
          computerChoice = "Ball";
        } else {
          computerChoice = "Stump";
        }
        return computerChoice;
      }


      function getResult(userMove, computerMove){
         if (userMove === 'Bat'){
           if (computerMove === 'Ball') {
            score.win ++;
          return 'User Won💥';
        } else if (computerMove === 'Bat') {
          score.tie ++;
          return  `It's a tie⚠`;
        } else {
          score.lost ++;
          return 'Computer Won💥';
        }

         }else if (userMove === 'Ball'){
          
           if (computerMove === 'Ball') {
          score.tie ++;
          return `It's a tie⚠`;
        } else if (computerMove === 'Bat') {
          score.lost ++;
          return  `Computer Won💥`;
        } else {
          score.win ++;
          return 'User Won💥';
        }
    } else {
      if (computerMove === 'Ball') {
         score.lost ++;
          return  'Computer Won💥';
        } else if (computerMove === 'Bat') {
          score.win ++;
          return 'User Won💥';
        } else {
          score.tie ++;
          return 'It is a tie⚠';
        }

    }
  }
  function showResult(userMove, computerMove, result){
    
    alert(
          `You Have Chosen ${userMove} . Computer choice is ${computerMove}  
${result} 
and the score are 
                            Won:${score.win}     Lost:${score.lost}      Tie:${score.tie}` 
        );
  }
    