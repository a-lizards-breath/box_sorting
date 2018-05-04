import React from 'react'
import Column from './column'

class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <Column className="column-left" />
        <Column className="column-center" />
        <Column className="column-right" />
      </div>
    )
  }
}

export default Page
