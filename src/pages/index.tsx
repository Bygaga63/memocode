import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { CodeEditor } from "../components/code-editor"
import { Button } from "@material-ui/core"
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

    {/*<Link to="/page-2/">Go to page 2</Link>*/}

    <MemoList data={TEMP_MEMO_CARDS}/>
    <ToolBar/>
  </Layout>
)

export default IndexPage
