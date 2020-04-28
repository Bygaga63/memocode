import { AppBar, Fab, IconButton, Toolbar as MaterialToolbar } from "@material-ui/core"
import * as React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const ToolBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <MaterialToolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
          <AddIcon />
        </Fab>
        <div className={classes.grow} />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <MoreIcon />
        </IconButton>
      </MaterialToolbar>
    </AppBar>
  )
}

export default ToolBar;