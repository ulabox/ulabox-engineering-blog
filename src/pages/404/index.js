// @flow
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'

type Props = {
  location: { pathname: string },
  data: {
    site: {
      siteMetadata: { title: string }
    }
  }
}

const Page404 = (props: Props) => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Page404
