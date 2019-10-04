'use strict'

const React = require('react')

class Homepage extends React.Component {
  render () {
    return (
      <div>
        <header id='top' className='header'>
          <div className='text-vertical-center'>
            <h1>Wazanet</h1>
            <h3>The future of CMS</h3>
            <br />
            <a href='#about' className='btn btn-dark btn-lg'>Find Out More</a>
          </div>
        </header>

        <section id='about' className='about'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                <p className='lead'>
                  This theme features some wonderful photography courtesy of <a target='_blank' href='http://join.deathtothestockphoto.com/'>Death to the Stock Photo</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='services' className='services bg-primary'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-lg-10 col-lg-offset-1'>
                <h2>Our Services</h2>
                <hr className='small' />
                <div className='row'>
                  <div className='col-md-3 col-sm-6'>
                    <div className='service-item'>
                      <span className='fa-stack fa-4x'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-cloud fa-stack-1x text-primary' />
                      </span>
                      <h4>
                        <strong>Service Name</strong>
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href='#' className='btn btn-light'>Learn More</a>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6'>
                    <div className='service-item'>
                      <span className='fa-stack fa-4x'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-compass fa-stack-1x text-primary' />
                      </span>
                      <h4>
                        <strong>Service Name</strong>
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href='#' className='btn btn-light'>Learn More</a>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6'>
                    <div className='service-item'>
                      <span className='fa-stack fa-4x'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-flask fa-stack-1x text-primary' />
                      </span>
                      <h4>
                        <strong>Service Name</strong>
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href='#' className='btn btn-light'>Learn More</a>
                    </div>
                  </div>
                  <div className='col-md-3 col-sm-6'>
                    <div className='service-item'>
                      <span className='fa-stack fa-4x'>
                        <i className='fa fa-circle fa-stack-2x' />
                        <i className='fa fa-shield fa-stack-1x text-primary' />
                      </span>
                      <h4>
                        <strong>Service Name</strong>
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                      <a href='#' className='btn btn-light'>Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className='callout'>
          <div className='text-vertical-center'>
            <h1>Vertically Centered Text</h1>
          </div>
        </aside>

        <section id='portfolio' className='portfolio'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10 col-lg-offset-1 text-center'>
                <h2>Our Work</h2>
                <hr className='small' />
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='portfolio-item'>
                      <a href='#'>
                        <img className='img-portfolio img-responsive' src='img/portfolio-1.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='portfolio-item'>
                      <a href='#'>
                        <img className='img-portfolio img-responsive' src='img/portfolio-2.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='portfolio-item'>
                      <a href='#'>
                        <img className='img-portfolio img-responsive' src='img/portfolio-3.jpg' />
                      </a>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='portfolio-item'>
                      <a href='#'>
                        <img className='img-portfolio img-responsive' src='img/portfolio-4.jpg' />
                      </a>
                    </div>
                  </div>
                </div>
                <a href='#' className='btn btn-dark'>View More Items</a>
              </div>
            </div>
          </div>
        </section>

        <aside className='call-to-action bg-primary'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <h3>The buttons below are impossible to resist.</h3>
                <a href='#' className='btn btn-lg btn-light'>Click Me!</a>
                <a href='#' className='btn btn-lg btn-dark'>Look at Me!</a>
              </div>
            </div>
          </div>
        </aside>

        <section id='contact' className='map'>
          <iframe width='100%' height='100%' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src='https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed' />
          <br />
          <small>
            <a href='https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A' />
          </small>
        </section>
      </div>
    )
  }
}

module.exports = Homepage
