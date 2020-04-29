/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { Provider } from 'react-redux';
import store from "./src/store"

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};