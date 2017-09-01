import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";

const IndexPage = () => (
  <div>
    <Helmet
      title="gatsby starter kit"
      meta={[
        { name: 'description', content: 'gatsby' },
        { name: 'keywords', content: 'gatsby' },
      ]}
    />
    <div>
      content goes here
    </div>
  </div>
)

export default IndexPage
