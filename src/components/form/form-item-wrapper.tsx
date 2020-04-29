import * as React from "react"
import { FC } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 2em",
    borderRadius: "2em",
    background: "#252525"
  },
  typography: {
    paddingLeft: "1.8em",
    marginBottom: "0.5em",
    color: "#696969"
  }
}))

type TFormItemWrapperProps = {
  label: string
}

const FormItemWrapper: FC<TFormItemWrapperProps> = ({ children, label }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography className={classes.typography}>{label}</Typography>

      <div className={classes.root}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default FormItemWrapper