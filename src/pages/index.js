/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLink from "../components/social-link"

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Hello World</Styled.h1>
    <div style={divStyle}>
      <SocialLink iconStyle={{width: "32px", height: "32px", fontSize: 6, color: "text"}} socialLink="https://www.github.com/bradleyheubel" icon="github"/>
      <SocialLink iconStyle={{width: "32px", height: "32px", fontSize: 6, color: "text"}} socialLink="https://www.linkedin.com/in/bradley-heubel" icon="linkedin"/>
    </div>
    {/*
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    */}
  </Layout>
)

export default IndexPage
