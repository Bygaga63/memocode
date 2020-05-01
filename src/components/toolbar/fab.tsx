import { Fab as MaterialFab, SvgIconTypeMap, Zoom } from "@material-ui/core"
import * as React from "react"
import { FC } from "react"
import { Link } from "gatsby"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { OverridableComponent } from "@material-ui/core/OverridableComponent"

const useStyles = makeStyles(() => ({
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    // animation: `$a 10s`,
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}))

type TFabProps = {
  fabType: "roundButton" | "icon"
  showFab: boolean
  FabComponent: OverridableComponent<SvgIconTypeMap>;
}

const Fab: FC<TFabProps> = ({ fabType, showFab, FabComponent }) => {
  const classes = useStyles()

  return showFab && (fabType === "icon") ?
    (<Link
      className={classes.link}
      to={"/memo/new"}
    >
      <FabComponent/>
    </Link>) :
    (<Zoom in={showFab}>
      <MaterialFab color="secondary" aria-label="add" className={classes.fabButton}>
        <FabComponent/>
      </MaterialFab>
    </Zoom>)
}


export default Fab