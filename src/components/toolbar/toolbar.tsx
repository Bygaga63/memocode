import { AppBar, IconButton, SvgIconTypeMap, Toolbar as MaterialToolbar } from "@material-ui/core"
import * as React from "react"
import { FC } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import MenuIcon from "@material-ui/icons/Menu"
import SearchInput from "./search-input"
import useSearch from "../../hooks/useSearch"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import Fab from "./fab"

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0
  },
  toolbarRoot: {
    display: "flex",
    justifyContent: "space-between"
  }
}))

type TToolBarProps = {
  showSearch?: boolean;
  FabComponent: OverridableComponent<SvgIconTypeMap>;
  fabType: "roundButton" | "icon"
}

const ToolBar: FC<TToolBarProps> = ({ showSearch, FabComponent, fabType }) => {
  const classes = useStyles()
  const { onBlurSearch, onChangeSearch, onFocusSearch, searchValue, showFab } = useSearch()
  console.log(showSearch)
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <MaterialToolbar className={classes.toolbarRoot}>

        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon/>
        </IconButton>

        <Fab
          showFab={showFab}
          FabComponent={FabComponent}
          fabType={fabType}
        />

        {showSearch && <SearchInput
          value={searchValue}
          onFocus={onFocusSearch}
          onBlur={onBlurSearch}
          onChange={onChangeSearch}
        />}

      </MaterialToolbar>
    </AppBar>
  )
}

export default ToolBar