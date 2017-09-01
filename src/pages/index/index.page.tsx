import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const GithubLogo = require('!svg-react-loader!svg-icon/dist/svg/ionic/social-github.svg');

const IndexPage = () => (
  <div>
    <Helmet
      title='gatsby starter kit'
      meta={[
        { name: 'description', content: 'gatsby' },
        { name: 'keywords', content: 'gatsby' },
      ]}
    />
    <div>
      <p>content goes here</p>
      <span>can svg too <GithubLogo style={{ width: `25px`, fill: `#0f0` }} /></span>
    </div>
  </div>
);

export default IndexPage;
