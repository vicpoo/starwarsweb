import React from 'react'
import Images from '../atoms/Images'
import Text from '../atoms/Text'
import  './Container.css'

export default function Container(props) {
  return (

    <div id='container'>
        <div id="paint">
            <Images val={props.val}></Images>
        </div>
        <div id="container_written">
          <div id="title">
          <Text val={props.title}></Text>
          </div>
            <Text val={props.text}></Text>
        </div>
    </div>
  )
}
