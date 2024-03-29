/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// Gatsby config env to access
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-animation/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
