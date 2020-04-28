import * as React from "react"
import { FC, useMemo } from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import { TMemoCard } from "../../types/types"
import DateService from "../../utils/DateService"
import MemoListItem from "./memo-list-item"

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  list: {
    marginBottom: theme.spacing(2),
    padding: '0 0 60px',
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
          {sortedByDateData.map((memoCard) => (
            <MemoListItem key={memoCard.id} data={memoCard} showSubheader={subheaderIdsToShow.includes(memoCard.id)}/>
          ))}
        </List>
    </React.Fragment>
  )
}

MemoList.defaultProps = {
  data: []
}

export default MemoList