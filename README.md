[Gatsby] 1.0 starter with styled-components, typescript, redux, and jest

# Quick start

```bash
# first time
npm install

# start a dev server
npm run develop

# build static site
npm run build

```

# How is this different from gatsby default starter?

Extends [gatsby-start-default] with

 - [styled-components]
 - [typescript]
 - [redux]
 - [jest]

Page routes have been changed to make it easier to include all related files in the same dir.  A page route is now created only when a file ends in `.page.tsx`.  All other files not found at `src/pages/*` or having the `.page.tsx` extension are assumed not be page entries.

This convention allows pages to have a structure similar to below

```bash
about/
 - components/
   - button/
     - index.tsx
     - styles.tsx
 - assets/
   - check.svg
 - index.page.tsx
 - styles.tsx

```

# TODO

 - Add jest support
 - Add inline svg support
 - Add redux support
 - Use it in a real project



[gatsby]: http://gatsbyjs.org
[styled-components]: http://styled-components.com
[typescript]: http://typescriptlang.org
[redux]: http://redux.js.org
[jest]: http://facebook.github.io/jest
[gatsby-start-default]: http://github.com/gatsbyjs/gatsby-starter-default
