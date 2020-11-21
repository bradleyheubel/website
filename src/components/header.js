import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "./global.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: 'var(--headerBg)',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-around`,
      }}
    >
      <h1 style={{ margin: 0, alignSelf: `flex-start`}}>
        <Link
          to="/"
          style={{
            color: `var(--textTitle)`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      
      <ThemeToggler>
        {({ theme, toggleTheme}) => (
          <label
            className="switch"
          >
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            <span className="slider round"></span>
          </label>
        )}    
      </ThemeToggler>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
