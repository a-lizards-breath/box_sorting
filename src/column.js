import React from 'react'
import Box from './box'

class Column extends React.Component {
  render() {
    console.log(this.props.boxes)
    return (
      <div className={this.props.className}>
        {this.props.boxes.map( box => <Box color={box.color}/>)}
      </div>
    )
  }
}

export default Column
