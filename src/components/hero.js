import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header";
import Img from "gatsby-image"

const Hero = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      heroImageSharp: file(relativePath: {eq: "hero.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <div style={{width: '100%', position: "relative"}}>
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: "#1d1b1b",
        opacity: '0.5',
        zIndex: '10',
      }}></div>
      <h2 style={{
        position: 'absolute',
        top: '50%',
        width: '100%',
        height: '100%',
        zIndex: '100',
        textAlign: 'center',
        color: '#ded8d8'
      }}>
      Helping you be Congruent in ideas and execution
      </h2>
      <Img fluid={data.heroImageSharp.childImageSharp.fluid}/>
      {children}
    </div>
}

export default Hero
