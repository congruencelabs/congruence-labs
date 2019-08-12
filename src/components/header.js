import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: 100
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
          className="logo"
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
