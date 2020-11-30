/** @jsx jsx */
import { Styled, jsx, Link } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Styled.root>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 960,
          textAlign: `center`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main
          sx={{
            fontFamily: "body",
            fontWeight: "body",
            color: "text",
          }}
        >
          {children}
        </main>

        <footer sx={{
          marginTop: `2rem`,
          color: `text`,
          fontSize: 10,
        }}>
          Built with <Link href="https://www.gatsbyjs.com" target="_blank">Gatsby</Link>
          {` `}
          | Styled using <Link href="https://theme-ui.com/" target="_blank">Theme-UI</Link>
          {` `}
          | Served by <Link href="https://www.netlify.com" target="_blank">Netlify</Link> 
          <br/>
          Bradley Heubel {new Date().getFullYear()}
        </footer>
      </div>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
