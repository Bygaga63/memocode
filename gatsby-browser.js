/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { Provider } from 'react-redux';
import store from "./src/store"
import Amplify, { Auth } from 'aws-amplify'
import awsConfig from './src/aws-exports'
Amplify.configure(awsConfig)

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};