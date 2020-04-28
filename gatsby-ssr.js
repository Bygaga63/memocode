/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import { Provider } from 'react-redux';
import store from "./src/store"
// You can delete this file if you're not using it
export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};