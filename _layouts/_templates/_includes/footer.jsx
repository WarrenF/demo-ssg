'use strict'

const React = require('react')

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10 col-lg-offset-1 text-center'>
              <h4>
                <strong>Wazanet</strong>
              </h4>
              <p>Some Swanky Address<br />Beverly Hills, CA 90210</p>
              <ul className='list-unstyled'>
                <li>
                  <i className='fa fa-phone fa-fw' />(123) 456-7890
                </li>
                <li>
                  <i className='fa fa-envelope-o fa-fw' />
                  <a href='mailto:name@example.com'>name@example.com</a>
                </li>
              </ul>
              <br />
              <ul className='list-inline'>
                <li>
                  <a href='#'>
                    <i className='fa fa-facebook fa-fw fa-3x' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-twitter fa-fw fa-3x' />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa fa-dribbble fa-fw fa-3x' />
                  </a>
                </li>
              </ul>
              <hr className='small' />
              <p className='text-muted'>&copy; {(new Date()).getFullYear()} Wazanet. All Rights Reserved.</p>
            </div>
          </div>
        </div>
        <a id='to-top' href='#top' className='btn btn-dark btn-lg'>
          <i className='fa fa-chevron-up fa-fw fa-1x' />
        </a>
      </footer>
    )
  }
}

module.exports = Footer
