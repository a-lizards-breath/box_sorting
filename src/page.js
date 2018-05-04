import React from 'react'
import Column from './column'
import Box from './box'

export default () => {
  return (
    <div className="page">
      <Column className="column-left">
        <Box color="red" /> 
      </Column> 
      
      <Column className="column-center">
        <Box color="blue" /> 
      </Column> 
     
      <Column className="column-right">
        <Box color="red" /> 
      </Column> 
    </div>
  )
}

