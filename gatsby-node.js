const path = require('path');

module.exports.createPages = async ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  // create dynamic pages here
   
}

// adjust page path logic here
// below will:
// page at root level, do nothing
// page ends in `.page.tsx`, create page and adjust path to match without `.page`
// otherwise delete the page as it is likely a support file such as styling or an asset
module.exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators;
  
  const relativeComponentPath = path.relative(`${__dirname}/src/pages/`, page.component);

  const isRootLevelPage = /^[a-zA-Z.0-9]+$/.test(relativeComponentPath);
  const isPageEntry = /\.page\.tsx$/.test(page.component);
  
  if (isPageEntry) {
    // page entry - adjust path and create
    const newPath = page.path.replace(/\.page/g, '').replace(/index\//g, '');
    deletePage({ path: page.path });
    page.path = newPath;
    createPage(page);
  } else if (!isRootLevelPage) {
    // not a page entry or root level page, remove
    deletePage({ path: page.path });
  }
}