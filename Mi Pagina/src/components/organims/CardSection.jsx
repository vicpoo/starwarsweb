import React from 'react'
import './CardSection.css'
import Card from '../molecules/Card'
import mysql from '../../assets/data/mysql'


function CardsSection() {
  return (
    <div id="cards_container">
              {
                mysql.cards.map(content => {
                  return (
                    <>
                    <Card val={content.image} text={content.text} btn={content.btn} title={content.character}></Card>
                    </>
                  )
                })
              }
    </div>
  )
}

export default CardsSection