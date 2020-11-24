/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import ThemeSwitcher from "./theme-switcher"

const Header = ({ siteTitle }) => {
  return (
    <header
      sx={{
        backgroundColor: 'background',
        color: 'primary',
        fontFamily: 'heading',
        fontWeight: 'heading',
      }}
    >
      <div
        sx={{
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
            sx={{
              color: `text`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>

        <ThemeSwitcher />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header