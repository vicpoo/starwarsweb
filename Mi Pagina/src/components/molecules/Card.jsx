import React from 'react'
import './Card.css'
import Images from '../atoms/Images.jsx';
import Text from '../atoms/Text'

export default function Card(props) {
  return (
    <>
        <div id='card_container'>
            <div id="paint">
                <Images val={props.val}></Images>
            </div>
            <div id="card_written">
              <div id="card_title">
                <Text val={props.title}></Text>
              </div>
                <Text val={props.text}></Text>
            </div>
        </div>
    </>
  )
}
