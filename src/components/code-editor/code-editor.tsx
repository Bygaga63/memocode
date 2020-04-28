import * as React from "react"
import { useState } from "react"
import { highlight, languages } from "prismjs"
import Editor from "react-simple-code-editor"
import * as styles from "./code-editor.module.css"

const TEMP_CODE = `const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);`
const CodeEditor = () => {
  const [code, changeCode] = useState(TEMP_CODE)

  return (
    <Editor
      value={code}
      onValueChange={changeCode}
      highlight={code => highlight(code, languages.ts, "ts")}
      padding={"1rem"}
      placeholder='javascript'
      color='white'
      // readOnly
      className={styles.container__editor}
      // disabled
      style={{
        background: "#272822",
        color: "white"
      }}/>
  )
}

export default CodeEditor