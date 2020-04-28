import * as React from "react"
import { FC } from "react"
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
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  }
}))

type TMemoListProps = {
  data: TMemoCard[]
}


const getSubheaderIdsToShow = (data: TMemoCard[]) => {
  const idsResult = []

  const sortedByDate = data
    .slice()
    .sort((a, b) => a.lastUsedDate.getTime() - b.lastUsedDate.getTime())

  const [firstTodayMemoCard] = sortedByDate
  idsResult.push(firstTodayMemoCard.id)

  let prevMemoCard = firstTodayMemoCard
  sortedByDate.forEach(memoCard => {
    const isAnotherDay: boolean = !DateService.isSame(memoCard.lastUsedDate, prevMemoCard.lastUsedDate)
    console.log(isAnotherDay);
    if (isAnotherDay) {
      idsResult.push(memoCard.id)
    }

    prevMemoCard = memoCard
  })

  return idsResult
}

const MemoList: FC<TMemoListProps> = ({ data }) => {
  const classes = useStyles()
  const subheaderIdsToShow = getSubheaderIdsToShow(data)
  return (
    <React.Fragment>
      {/*<CssBaseline />*/}
      <Paper square className={classes.paper}>
        <List className={classes.list}>
          {data.map(({ id, title, description, lastUsedDate }) => (
            <React.Fragment key={id}>
              {subheaderIdsToShow.includes(id) && <MemoListSubheader date={lastUsedDate}/>}
              <ListItem button>

                {/*<ListItemAvatar>*/}
                {/*<Avatar alt="Profile Picture" src={person} />*/}
                {/*</ListItemAvatar>*/}
                <ListItemText primary={title} secondary={description}/>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  )
}

MemoList.defaultProps = {
  data: []
}

export default MemoList