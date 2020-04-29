import * as React from "react"
import { FC } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MemoCard } from "../components"

type TMemoProps = {
  id: string
}

const Memo: FC<TMemoProps> = ({id}) => {
  const title = id === 'new' ? 'Create' : 'Edit'
  return (
    <Layout>
      <SEO title="Page two"/>
      <MemoCard title={title}/>
    </Layout>
  )
}

export default Memo
