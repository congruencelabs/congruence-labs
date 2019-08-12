import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header";
import Img from "gatsby-image"

const Hero = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.jpg"}) {
        publicURL
      }
      heroImageSharp: file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <div style={{width: '100%', paddingBottom: '40px'}}>
      <Img fluid={data.heroImageSharp.childImageSharp.fluid}/>
      {children}
    </div>
}

export default Hero
