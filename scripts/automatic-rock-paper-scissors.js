let score = JSON.parse(localStorage.getItem('score'));
            if (score===null){
                score={ Wins: 0, Looses: 0, Ties: 0 };
            }

            updateScoreElement();
            

            let isPlay = false;
            let intervalid;
            function autoplay(){
                if (!isPlay){
                    intervalid = setInterval(function(){
                        const playerMove = random();
                        game(playerMove);
                    },1000);
                    isPlay = true;
                }
                else{
                    clearInterval(intervalid);
                    isPlay = false;
                }

            }
                

            function game(playerMove){
                const computerMove = random();
                let result='';
                if (playerMove === 'rock'){
                    if (computerMove==='rock'){
                        result = 'Match Tie';
                    }
                    else if (computerMove === 'paper'){
                        result = 'You Lose';
                    }
                    else if (computerMove === 'scissors'){
                        result = 'You Won!';
                    }
                }
                else if (playerMove === 'paper'){
                    if (computerMove==='rock'){
                        result = 'You Won!';
                    }
                    else if (computerMove === 'paper'){
                        result = 'Match Tie';
                    }
                    else if (computerMove === 'scissors'){
                        result = 'You Loose';
                    }
                }
                else if (playerMove === 'scissors'){
                    if (computerMove==='rock'){
                        result = 'You Loose';
                    }
                    else if (computerMove === 'paper'){
                        result = 'You Won!';
                    }
                    else if (computerMove === 'scissors'){
                        result = 'Match Tie';
                    }
                }
                if (result==='You Won!'){
                    score.Wins+=1;
                }
                else if (result==='You Loose'){
                    score.Looses+=1;
                }
                else if (result==='Match Tie'){
                    score.Ties+=1;
                }
                
                localStorage.setItem('score', JSON.stringify(score));
                updateScoreElement();
                document.querySelector('.js-result').innerHTML = result;                
                document.querySelector('.js-moves').innerHTML=`You
                <img src="images/${playerMove}-emoji.png" class="move-icon">
                <img src="images/${computerMove}-emoji.png" class="move-icon">
                Computer`;
                //alert(`You choose ${playerMove}. Computer choose ${computerMove}. Hence ${result}.    Match Won: ${score.Wins}, Match Loose: ${score.Looses}, Match Ties: ${score.Ties}`)
                
            }

            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML = `Match Won: ${score.Wins}, Match Loose: ${score.Looses}, Match Ties: ${score.Ties}`;
            }
            function random(){
                const randomNumber = Math.random();
                let computerMove = ''
                if (randomNumber>=0 && randomNumber<1/3){
                    computerMove = 'rock';
                }
                else if (randomNumber>=1/3 && randomNumber < 2/3){
                    computerMove = 'paper';
                }
                else if (randomNumber>=2/3 && randomNumber<=1){
                    computerMove = 'scissors';
                }
                return computerMove;
            }