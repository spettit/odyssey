import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Crew</h1>
    <p>Jolly Sailors all</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
