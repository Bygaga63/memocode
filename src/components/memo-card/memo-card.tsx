import * as React from "react"
import { FC } from "react"
import { Grid, TextField, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SaveIcon from "@material-ui/icons/Save"
import { FormItemWrapper, ToolBar } from "../index"
import { CodeEditor } from "../code-editor"

const useStyles = makeStyles(() => ({
  title: {
    color: "#F8F8F8"
  },
  form: {
    paddingBottom: "6em"
  },
  input: {
    "&.MuiInputBase-input": {
      color: "#F8F8F8",
      fontSize: "14px"
    }
  }
}))

type TMemoCardProps = {
  title: string
}

const MemoCard: FC<TMemoCardProps> = ({ title = "" }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography className={classes.title} align={"center"} variant={"h2"}>{title.toUpperCase()}</Typography>

      <form action="" className={classes.form}>
        <Grid container spacing={2} justify={"center"}>
          <Grid item xs={10}>
            <FormItemWrapper label={"Название"}>
              <TextField
                fullWidth
                id="title"
                InputProps={{
                  disableUnderline: true,
                  className: classes.input
                }}
                placeholder="Введите название"
                multiline
                rows={2}
              />
            </FormItemWrapper>
          </Grid>

          <Grid item xs={10}>
            <FormItemWrapper label={"Описание"}>
              <TextField
                fullWidth
                multiline
                rows={6}
                id="description"
                placeholder="Добавьте описание"
                InputProps={{
                  disableUnderline: true,
                  className: classes.input
                }}
              />
            </FormItemWrapper>
          </Grid>


          <Grid item xs={10}>
            <FormItemWrapper label={"Хороший код"}>
              <CodeEditor/>
            </FormItemWrapper>
          </Grid>
          <Grid item xs={10}>
            <FormItemWrapper label={"Плохой код"}>
              <CodeEditor/>
            </FormItemWrapper>

          </Grid>
        </Grid>
      </form>

      <ToolBar
        FabComponent={SaveIcon}
        fabType={"roundButton"}
      />
    </React.Fragment>
  )
}

export default MemoCard
