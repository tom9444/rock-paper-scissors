const BtnRock = document.getElementById("rock");
        const BtnPaper = document.getElementById("paper");
        const BtnScissors = document.getElementById("scissors");
        let result = document.getElementById("result");
        let compSelection = document.getElementById("compSelection");
        let userWinsCount = document.getElementById("userWinsCount");
        let compWinsCount = document.getElementById("compWinsCount");
        let totalGameCount = document.getElementById("gameCount");
        let gameResult = document.getElementById("gameResult");

        let winCount = 0;           
        let loseCount = 0;          
        let gameCount = 0;

        // checks user's choice
        let playerChoice = "";
        BtnRock.addEventListener("click",() => {
          playerChoice = "rock";
          playRound();
        })
        BtnPaper.addEventListener("click",() => {
          playerChoice = "paper";
          playRound();
        })
        BtnScissors.addEventListener("click",() => {
          playerChoice = "scissors";
          playRound();
        })

        //plays the game
        function playRound () {
          const choices = ["rock","paper","scissors"];
          let compChoice = choices[Math.floor(Math.random()*choices.length)];
          switch (playerChoice + compChoice) {
           case "rockscissors":
           case "scissorspaper": 
           case "paperrock":
           result.textContent = `Result of the round: You won! 💪`;
           winCount++;
           break;
           case "rockpaper":
           case "paperscissors":
           case "scissorsrock":
           result.textContent = `Result of the round: You lose. 🫣`;
           loseCount++;
           break;
           case "rockrock":
           case "paperpaper":
           case "scissorsscissors":
           result.textContent = `Result of the round: It is a draw. 😴`;
           break;
          }
          gameCount++;
          compSelection.textContent = `Computer choice = ${compChoice}`;
          userWinsCount.textContent = `Player score = ${winCount}`;
          compWinsCount.textContent = `Computer score = ${loseCount}`;
          totalGameCount.textContent = `Total game count = ${gameCount}`;

          if (gameCount == 5 && winCount > loseCount) {
            gameResult.textContent = "You are the WINNER of most of the games! 🙌";
            addResetButton();
          }
          else if (gameCount == 5 && winCount < loseCount) {
            gameResult.textContent = "You are the LOSER of most of the games! 🥲";
            addResetButton();
          }
          else if (gameCount == 5 && winCount == loseCount) {
            gameResult.textContent = " The game ended as a draw. 🫠"
            addResetButton();
          }

          else if (gameCount > 5) {
            resetGame();
          }

        }

        function addResetButton () {
          const resetButton = document.createElement("button");
          resetButton.setAttribute("id","resetBtn");
          resetButton.textContent = "Play again";
          document.body.appendChild(resetButton);
          resetButton.addEventListener("click", resetGame);
        }

        function resetGame () {
          const resetButton = document.getElementById("resetBtn");
          document.body.removeChild(resetButton)
          winCount = 0;           
          loseCount = 0;          
          gameCount = 0;
          result.textContent = "";
          gameResult.textContent = "";
          compSelection.textContent = "";
          userWinsCount.textContent = "";
          compWinsCount.textContent = "";
          totalGameCount.textContent = "";
        }