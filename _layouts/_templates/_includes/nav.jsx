'use strict'

const React = require('react')

class Nav extends React.Component {
  render () {
    return (
      <nav id='sidebar-wrapper'>
        <ul className='sidebar-nav'>
          <a id='menu-close' href='#' className='btn btn-light btn-lg pull-right toggle'><i className='fa fa-times' /></a>
          <li className='sidebar-brand'>
            <a href='#top'>Wazanet</a>
          </li>
          <li>
            <a href='#top'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    )
  }
}

module.exports = Nav
