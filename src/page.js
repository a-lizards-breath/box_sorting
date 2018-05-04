import React from 'react'
import Column from './column'

class Page extends React.Component {
  render() {
    let redBox  = {color: "red"}
    let blueBox = {color: "blue"}
    let left    = [redBox, redBox, blueBox, blueBox] 
    let center  = [blueBox] 
    let right   = [redBox, blueBox, redBox, redBox, redBox, blueBox] 
    return (
      <div className="page">
        <Column className="column-left" boxes={left}/>
        <Column className="column-center" boxes={center}/>
        <Column className="column-right" boxes={right}/>
      </div>
    )
  }
}

export default Page
