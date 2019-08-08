import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header";

const Hero = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: {eq: "hero.jpg"}) {
        publicURL
      }
    }
  `)

  return <div 
    style={{
        alignItems: `center`,
        background: `${data.heroImage.publicURL}`,
        backgroundImage: `url(${data.heroImage.publicURL})`,
        backgroundSize: `cover`,
        color: `#ffffff`,
        display: `flex`,
        flexFlow: `column nowrap`,
        justifyContent: `center`,
        minHeight: `100vh`,
        height: `100px`,
        width: `100%`
    }}>
      {children}
    </div>
}

export default Hero
