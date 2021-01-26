import React, {useState} from 'react'
import Board from './Board'
import './Game.css'

export const DIMS = 3;
export const DRAW = 0;
export const PLAYER_X = 1;
export const PLAYER_O = 2;
export const SQUARE_DIMS = 100;

export const GAME_STATES = {
  notStarted: "not_started",
  inProgress: "in_progress",
  over: "over"
};

export const switchPlayer = player => {
  return player === PLAYER_X ? PLAYER_O : PLAYER_X;
};

export function calculateWinner(squares) {
	const lines = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	]

	for(let i=0 ; i<lines.length ; i++){
		const [a,b,c] = lines[i]
		if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
			return squares[a]
		}
	}
	return null
}


export default function Game() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [XIsNext, setXIsNext] = useState(true)
	const [players, setPlayers] = useState({ human: null, computer: null })
	const [gameState, setGameState] = useState(GAME_STATES.notStarted)
	const winner = calculateWinner(board)

	const handleClick = (i) => {
		const boardCopy = [...board]

		if(winner || boardCopy[i]) return

		boardCopy[i] = XIsNext ? "X" : "O"

		setBoard(boardCopy)
		setXIsNext(!XIsNext)
	}

	const choosePlayer = option => {
		setPlayers({ human: option, computer: switchPlayer(option) });
  		setGameState(GAME_STATES.inProgress)
	}

	return gameState === GAME_STATES.notStarted ? (
		<main className="gameContent fullscreen style1">
			<h1>Tic Tac Toe</h1>
			<div id="gamePlayer" className="gamePlayer">
				<h2> Choose Player </h2>
				<div className="p1" onClick={() => choosePlayer(PLAYER_X)} >X</div>
				<div className="p2" onClick={() => choosePlayer(PLAYER_O)} >O</div>
			</div>
		</main>
	) : (
		<main className="gameContent fullscreen style1">
			<h1>Tic Tac Toe</h1>
			<div id="gameBoard">
				<Board squares={board} onClick={handleClick} />
				<div id="gameBox" >
					<p> {winner ? "winner: "+ winner : "Next Player: "+ (XIsNext ? "b" : "d")} </p>
				</div>
			</div>
		</main>
	)
}