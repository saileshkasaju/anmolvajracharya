import React from 'react'
import { Link } from 'gatsby'

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const currentNav = window.location.pathname.replace(new RegExp('/', 'g'), '')
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <span className="nav-burger" onClick={() => setToggleNav(!toggleNav)}>
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </span>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li
                className={`nav-home ${currentNav === '' ? 'nav-current' : ''}`}
                role="menuitem"
              >
                <Link to={`/`} onClick={() => setToggleNav(false)}>
                  Home
                </Link>
              </li>
              <li
                className={`nav-about ${
                  currentNav === 'about' ? 'nav-current' : ''
                }`}
                role="menuitem"
              >
                <Link to={`/about`} onClick={() => setToggleNav(false)}>
                  About
                </Link>
              </li>
              {/* <li className="nav-elements" role="menuitem">
                <Link to={`/elements`} onClick={() => setToggleNav(false)}>Elements</Link>
              </li> */}
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          {/* <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div> */}
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{' '}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
