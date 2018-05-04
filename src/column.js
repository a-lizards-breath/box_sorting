import React from 'react'
import Box from './box'

class Column extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Box color="blue"/> 
        <Box color="red"/>
      </div>
    )
  }
}

export default Column
