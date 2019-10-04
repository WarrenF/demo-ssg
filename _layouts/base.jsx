'use strict'

const React = require('react')
const Head = require('./_templates/_includes/head.jsx')
const Footer = require('./_templates/_includes/footer.jsx')
const Nav = require('./_templates/_includes/nav.jsx')

class BaseFile extends React.Component {
  render () {
    const { children, title, pagename, assetVersion, domainSettings } = this.props
    const pagejs = (pagename || 'index') + '.js'
    const script = `
function downloadCSSAtOnload() {
  var stylesheets = [
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
  ];
  for ( var i = 0; i < stylesheets.length; i++) {
    var element = document.createElement("link");
    element.href = stylesheets[i];
    element.rel = 'stylesheet';
    element.type = 'text/css';
    var documentHead = document.head || document.getElementsByTagName("head")[0];
    documentHead.appendChild(element);
  }
  var javascript = [
    '${domainSettings.assets}/js/script${assetVersion}.min.js'
  ];
  for ( var i = 0; i < javascript.length; i++) {
    var element = document.createElement("script");
    element.src = javascript[i];
    element.type = 'text/javascript';
    document.body.appendChild(element);
  }
}

if (window.addEventListener)
window.addEventListener("load", downloadCSSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", downloadCSSAtOnload);
else window.onload = downloadCSSAtOnload;
`
    return (
      <html lang='en'>
        <Head title={title} stylesheet={`/css/core.mino${assetVersion}.css`} />
        <body>
          <a id='menu-toggle' href='#' className='btn btn-dark btn-lg toggle'><i className='fa fa-bars' /></a>
          <Nav />
          <div id='content' dangerouslySetInnerHTML={{ __html: children }} />
          <Footer />
          
          <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/1.2.1/jquery-migrate.min.js' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js' />
          <script src='/js/commons.chunk.js' />
          <script src={'/js/' + pagejs} />
          <script src='https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js' />
          <script dangerouslySetInnerHTML={{ __html: script }} />
        </body>
      </html>
    )
  }
}

module.exports = BaseFile
