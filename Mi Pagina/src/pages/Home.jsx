import React from 'react'
import SectionHero from '../components/organims/SectionHero'
import './Home.css'
import CardsSection from '../components/organims/CardSection'
import BottomSection from '../components/organims/BottonSection'
import TopSection from '../components/organims/TopSection'


export default function Home() {
  return (
    <>
      <TopSection></TopSection>
      <div id='main_content'>
      <SectionHero></SectionHero>
      <CardsSection></CardsSection>
      </div>
      <BottomSection></BottomSection>
    </>
  )
}
