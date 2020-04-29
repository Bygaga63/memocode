import ListSubheader from "@material-ui/core/ListSubheader"
import * as React from "react"
import { FC } from "react"
import { makeStyles } from "@material-ui/core/styles"
import DateService from "../../utils/DateService"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    margin: 0,
    color: '#fff',
  }
}))

type MemoListSubheader = {
  date: Date,
}

const getTitle = (date: Date) => {
  switch (true) {
    case DateService.isToday(date): return 'Сегодня'
    case DateService.isYesterday(date): return 'Вчера'
    default: return DateService.toDateString(date)
  }
}

const MemoListSubheader: FC<MemoListSubheader> = ({date}) => {
  const classes = useStyles()
  const title = getTitle(date);
  return (<ListSubheader classes={classes}>{title}</ListSubheader>)
}


export default React.memo(MemoListSubheader);