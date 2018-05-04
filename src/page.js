import React from 'react'
import Column from './column'

class Page extends React.Component {
  render() {
    let left   = [{color: "red"}, {color: "blue"}] 
    let center = [{color: "blue"}, {color: "blue"}] 
    let right  = [{color: "red"}] 
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
