import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MemoList, ToolBar } from "../components"
import { TEMP_MEMO_CARDS } from "../api/MemoCardsService"
import Header from "../components/header/header"
import AddIcon from "@material-ui/icons/Add"
import { withAuthenticator } from "aws-amplify-react"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Header title='MemoCode' />
    <MemoList data={TEMP_MEMO_CARDS}/>
    <ToolBar
      FabComponent={AddIcon}
      showSearch
      fabType={"icon"}
    />
  </Layout>
)

export default withAuthenticator(IndexPage, true)
