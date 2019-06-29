import React, { useState, useEffect } from 'react';
import Board from './components/board'
//import Timer from './components/Timer'

import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [dimension, setDimension] = useState(400)
  const [solved, setSolved] = useState([])
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])

  useEffect(() => {
    preloadImages()
  }, cards)

  useEffect(() => {  
    const resizelistener = window.addEventListener('resize', resizeBoard)

    return () => window.removeEventListener('resize', resizelistener)
  })

  const message = document.querySelector('h2')

  const handleClick = (id) => { 
    setDisabled(true)
    console.log(solved.length + 2, cards.length)
    if(flipped.length == 0) {
      setFlipped([...flipped, id])
      setDisabled(false)
      return
    } else {
      if (sameCardClicked(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([... solved, flipped[0], id])
        resetCards()
      } else if (solved.length + 2 == cards.length) {
        message.innerHTML += " YOU WIN!!!!!!!!!"
        console.log(message.innerHTML)
      } else {
        setTimeout(resetCards, 2000)
      }
    }
  }

  const preloadImages = () => {
    cards.map(card => {
      const src = `./img/${card.type}.png`
      new Image().src = src
    })
  }

  const resetCards = () => {
    setFlipped([])
    setDisabled(false)
  }

  const sameCardClicked = (id) => flipped.includes(id)

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id == id)
    const flippedCard = cards.find((card) => flipped[0] == card.id)
    return flippedCard.type == clickedCard.type
  }

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ),
    )
  }

  return (
    <div>
      <h2>Can you remember where the cards are?</h2>
      <Board
        dimension={dimension}
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </div>
  );
}
