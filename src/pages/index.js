/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLink from "../components/social-link"

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Styled.h1>Hello World</Styled.h1>
    <div style={divStyle}>
      <SocialLink socialStyle={{width: "48px", height: "48px"}} socialLink="https://www.github.com/bradleyheubel" imgName="github.png"/>
      <SocialLink socialStyle={{width: "48px", height: "48px"}} socialLink="https://www.linkedin.com/in/bradley-heubel" imgName="linkedin.png"/>
    </div>
    {/*
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> 
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    */}
  </Layout>
)

export default IndexPage
