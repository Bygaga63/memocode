import { AppBar, Fab, fade, IconButton, InputBase, Toolbar as MaterialToolbar, Zoom } from "@material-ui/core"
import * as React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import MenuIcon from "@material-ui/icons/Menu"
import AddIcon from "@material-ui/icons/Add"
import SearchIcon from "@material-ui/icons/Search"
import MoreIcon from "@material-ui/icons/MoreVert"
import { useState } from "react"

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  addIcon: {
    color: '#fff'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("xs")]: {
      width: "1ch",
      "&:focus": {
        width: "20ch",
        paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,

      }
    }
  },
  toolbarRoot: {
    display: "flex",
    justifyContent: "space-between"
  }
}))

const ToolBar = () => {
  const classes = useStyles()
  const [showFab, changeShowFab] = useState(true)
  const onFocusInputClick = () => changeShowFab(false)
  const onBlurInputClick = () => changeShowFab(true)
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <MaterialToolbar className={classes.toolbarRoot}>

        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon/>
        </IconButton>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onFocus={onFocusInputClick}
            onBlur={onBlurInputClick}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        {showFab &&
        <Zoom in={showFab}>
          <Fab color="secondary" aria-label="add" className={classes.fabButton} >
          <AddIcon className={classes.addIcon}/>
        </Fab>
        </Zoom>}
      </MaterialToolbar>
    </AppBar>
  )
}

export default ToolBar