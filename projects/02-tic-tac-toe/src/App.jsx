import { useState } from "react"
import confetti from "canvas-confetti"

import { Square } from "./components/Square"
import { TURNS } from "./constant"
import { checkWinnerFrom } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"
import { checkEndGame } from "./logic/board"
import { Board } from "./components/Board"
import { resetGameToStorage, saveGameToStorage } from "./logic/storage"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage 
      ? JSON.parse(boardFromStorage) 
      : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  //null es que no hay ganador, false es que hay un empate
  const [winner , setWinner] = useState(null)

  const resetGame = () => {
    resetGameToStorage() 
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    //No actualizamos la posicion si ya hay algo
    if(board[index] || winner) return
    
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        <Board board={board} updateBoard={updateBoard}></Board>
      </section>

      <section className="turn">
        <Square isSelected={turn ===TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <section>
        <WinnerModal winner={winner} resetGame={resetGame}/>
      </section>
    </main>
  )
}

export default App
