 {
    const playGame = function(playerInput){
        clearMessages();
        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            }
            else if(argMoveId == 2){
                return 'papier';
            }
            else if(argMoveId == 3){
                return 'nożyce';
            }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
        const displayResult = function(argComputerMove, argPlayerMove){
            printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);    
            if( argComputerMove == argPlayerMove) {
                printMessage('Mamy remis!');
            } else if (
                (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
                (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
                (argComputerMove == 'papier' && argPlayerMove == 'kamień')){
                printMessage('Ja wygrałem!');
            } 
            else if (argPlayerMove == 'nieznany ruch'){
                printMessage('Nie podałeś odpowiedniej wartości!');
            }
            else {
                printMessage('Ty wygrywasz!');
            }
        }
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);
        const computerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + computerMove);
        console.log('Gracz wpisał: ' + playerInput);
        const playerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + playerMove);
        displayResult(computerMove, playerMove);
    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}