import React from 'react'
import mysql from '../../assets/data/mysql'
import './BottomSection.css'
import Bottom from '../molecules/Botton'

function BottomSection() {
  return (
    <div id="bottom">
        {
          mysql.bottom.map(content => {
            return (
              <Bottom text1 = {content.text1} text2={content.text2} text3={content.text3}></Bottom>
            )
          })
        }
    </div>
  )
}

export default BottomSection