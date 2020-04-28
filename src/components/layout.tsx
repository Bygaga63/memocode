/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header/header"

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
    <>
      <Header title={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        {/*<footer>*/}
        {/*  © {new Date().getFullYear()}, Built with*/}
        {/*  {` `}*/}
        {/*  <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </>
  )
}
export default Layout
