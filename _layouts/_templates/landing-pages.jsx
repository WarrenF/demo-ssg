'use strict'

const React = require('react')

class Homepage extends React.Component {
  render () {
    const { title = '', subTitle = '', contents = '' } = this.props
    const subTitleElement = subTitle ? <h2>{subTitle}</h2> : null
    return (
      <div>
      <header id='top' className='header'>
        <div className='text-vertical-center'>
          <h1>{title}</h1>
          {subTitleElement}
          <div id='contentArea' className='container' dangerouslySetInnerHTML={{ __html: contents }} />
        </div>
      </header>
      </div>
    )
  }
}

module.exports = Homepage
