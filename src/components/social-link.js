/** @jsx jsx */
import { Styled, jsx, Link } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Image from './image'

class SocialLink extends React.Component{
    render(){
        return (
            <Link href={this.props.socialLink}>
                <Image imgStyle={{...this.props.socialStyle}} imgName={this.props.imgName}/>
            </Link>
        )
    }
}

export default SocialLink