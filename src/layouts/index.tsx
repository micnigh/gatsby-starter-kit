import * as React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const TemplateWrapper = ({ children }: any) => (
  <div>
    {children()}
  </div>
);

export default TemplateWrapper;
