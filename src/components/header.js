import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{
        display: 'flex',
        alignItems: 'row'
      }}>
      </div>
    </div>
  </header>
)

export default Header
