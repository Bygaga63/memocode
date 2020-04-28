import * as React from "react"
import { FC, useMemo } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import MemoListSubheader from "./memo-list-subheader"
import { TMemoCard } from "../../types/types"
import DateService from "../../utils/DateService"

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  list: {
    marginBottom: theme.spacing(2),
    padding: '0 0 60px',
  },
  listItemRoot: {
    margin: `0.6em 0`,
    borderRadius: "5px"
  },
  listWrapper: {
    padding: theme.spacing(0, 1)
  }
}))

type TMemoListProps = {
  data: TMemoCard[]
}

const sortedByDate = (data: TMemoCard[]) => {
  return data
    .slice()
    .sort((a, b) => b.lastUsedDate.getTime() - a.lastUsedDate.getTime())
}

const getSubheaderIdsToShow = (data: TMemoCard[]) => {
  const idsResult = []

  const [firstTodayMemoCard] = data
  idsResult.push(firstTodayMemoCard.id)

  let prevMemoCard = firstTodayMemoCard
  data.forEach(memoCard => {
    const isAnotherDay: boolean = !DateService.isSame(memoCard.lastUsedDate, prevMemoCard.lastUsedDate)
    if (isAnotherDay) {
      idsResult.push(memoCard.id)
    }

    prevMemoCard = memoCard
  })

  return idsResult
}

const MemoList: FC<TMemoListProps> = ({ data }) => {
  const classes = useStyles()
  const sortedByDateData = useMemo(() => sortedByDate(data), [data]);
  const subheaderIdsToShow = getSubheaderIdsToShow(sortedByDateData)
  return (
    <React.Fragment>
        <List className={classes.list}>
          {sortedByDateData.map(({ id, title, description, lastUsedDate }) => (
            <React.Fragment key={id}>
              {subheaderIdsToShow.includes(id) && <MemoListSubheader date={lastUsedDate}/>}

              <div className={classes.listWrapper}>
                <Paper elevation={3}>

                <ListItem className={classes.listItemRoot} button>
                  <ListItemText primary={title} secondary={description}/>
                </ListItem>
                </Paper>
              </div>


            </React.Fragment>
          ))}
        </List>
    </React.Fragment>
  )
}

MemoList.defaultProps = {
  data: []
}

export default MemoList