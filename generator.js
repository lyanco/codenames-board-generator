function generateBoard() {
	function chooseTeamOrder() {
		if (Math.random() < .5) {
			return ['R','B'];
		} else {
			return ['B','R'];
		}
	}
	
	function placeToken(max,token) {
		for (i=0;i<max;i++) {
			var seed = Math.random();
			var spot = Math.floor(seed * validSpaces.length);
			board[validSpaces[spot]] = token;
			validSpaces.splice(spot,1);
		}
	}

	var board = [];
	var validSpaces = [];

	for (i=0; i<25; i++) {
		validSpaces[i] = i;
		board[i] = 'N';
	}

	var teams = chooseTeamOrder();
	//starting team
	placeToken(9,teams[0]);
	//secondteam
	placeToken(8,teams[1]);
	//assassin
	placeToken(1,'A');
	

	//display board
	console.log(teams[0] + ' starts');
	for (i=0;i<5;i++){
		var string = board[i*5+0] + board[i*5+1] + board[i*5+2] + board[i*5+3] + board[i*5+4];
		console.log(string);
	}
}
//type to run
generateBoard();
