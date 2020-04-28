/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
// You can delete this file if you're not using it
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/memo-card/)) {

    // Update the page.
    createPage({
      path: '/memo-card',
      matchPath: '/memo-card/:id',
      component: path.resolve('src/pages/memo-card.tsx')
    })
  }
}