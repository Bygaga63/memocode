import * as React from "react"
import { FC } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MemoListSubheader from "./memo-list-subheader"
import { TMemoCard } from "../../types/types"
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  listItemRoot: {
    margin: `0.6em 0`,
    borderRadius: "5px"
  },
  listItemWrapper: {
    padding: theme.spacing(0, 1)
  }
}))

type TMemoListItemProps = {
  data: TMemoCard
  showSubheader: boolean;
}

const MemoListItem: FC<TMemoListItemProps> = ({ data: {id, lastUsedDate, title, description}, showSubheader }) => {
  const classes = useStyles()
  return (
          <Link
            to={`/memo-card/${id}`}
          >
            {showSubheader && <MemoListSubheader date={lastUsedDate}/>}

            <div className={classes.listItemWrapper}>
              <Paper elevation={3}>
                <ListItem className={classes.listItemRoot} button>
                  <ListItemText primary={title} secondary={description}/>
                </ListItem>
              </Paper>
            </div>
          </Link>
  )
}

export default MemoListItem