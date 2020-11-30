/** @jsx jsx */
import { Styled, jsx, Link } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

class SocialLink extends React.Component{
    render(){
        let icon

        if (this.props.icon === "linkedin"){
            icon = <FaLinkedin sx={{...this.props.iconStyle}}/>
        } else if (this.props.icon === "github"){
            icon = <FaGithub sx={{...this.props.iconStyle}}/>
        }

        console.log(icon)

        return (
            <Link style={{padding: "2px"}} href={this.props.socialLink} target="_blank">
                {icon}
            </Link>
        )
    }
}

export default SocialLink