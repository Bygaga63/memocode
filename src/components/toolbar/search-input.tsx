import { fade, InputBase } from "@material-ui/core"
import * as React from "react"
import { FC } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import SearchIcon from "@material-ui/icons/Search"

const useStyles = makeStyles((theme) => ({
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
        paddingLeft: `calc(1em + ${theme.spacing(3)}px)`

      }
    }
  }
}))

type TSearchInput = {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string
}

const SearchInput: FC<TSearchInput> = ({ onBlur, onFocus, onChange, value = "" }) => {
  const classes = useStyles()

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon/>
      </div>
      <InputBase
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  )
}

export default SearchInput