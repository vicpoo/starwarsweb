import React from 'react'
import Container from '../molecules/Container'
import Top from '../molecules/Top'
import './Section.css'
import Card from '../molecules/Card'
import Botton from '../molecules/Botton'
import mysql from '../../assets/data/mysql';

export default function Section() {
  return (
    <>
        <Top></Top>
        <div id="main_container">
        {
                mysql.heroSection.map(content => {
                  return (
                    <>
                    <Container val={content.image} text={content.text}></Container>
                    </>
                  )
                })
              }
            <div id="cards_container">
              {
                mysql.cards.map(content => {
                  return (
                    <>
                    <Card val={content.image} text={content.text}></Card>
                    </>
                  )
                })
              }
            </div>

        </div>
        <Botton></Botton>
    </>
  )
}