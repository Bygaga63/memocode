import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MemoList, ToolBar } from "../components"
import { TEMP_MEMO_CARDS } from "../api/MemoCardsService"


const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    {/*<CodeEditor/>*/}
    {/*<Button>Test1</Button>*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <Image/>*/}
    {/*</div>*/}

    {/*<Link to="/memo-card/">Go to page 2</Link>*/}

    <MemoList data={TEMP_MEMO_CARDS}/>
    <ToolBar/>
  </Layout>
)

export default IndexPage
