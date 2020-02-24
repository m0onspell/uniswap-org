/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../styles/theme'
import Header from '../components/header'
import Footer from '../components/footer'
import Mdx from '../components/mdx'
import SEO from '../components/seo'

import '../styles/prism-github.css'
import '../styles/layout.css'

const Layout = ({ path, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <SEO title="Uniswap" path={path} />
        <GlobalStyle />
        <Header path={path} siteTitle={data.site.siteMetadata.title} />
        <Mdx>{children}</Mdx>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
