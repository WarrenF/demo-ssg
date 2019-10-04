'use strict'

const React = require('react')

class Head extends React.Component {
  render () {
    const { title, stylesheet } = this.props
    return (
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        { stylesheet && (
          <link href={stylesheet} rel='stylesheet' />
        )}
      </head>
    )
  }
}

module.exports = Head
