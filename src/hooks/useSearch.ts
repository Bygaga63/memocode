import * as React from "react"
import { useState } from "react"

type TUserSearchResult = {
  showFab: boolean
  searchValue: string
  onChangeSearch: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocusSearch: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlurSearch: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const useSearch = (): TUserSearchResult => {
  const [showFab, changeShowFab] = useState(true)
  const [searchValue, changeSearch] = useState('')
  const onFocusSearch = () => changeShowFab(false)
  const onBlurSearch = () => changeShowFab(true)
  const onChangeSearch = (event) => {
     changeSearch(event.target.value);
  };

  return { showFab, searchValue, onChangeSearch, onFocusSearch, onBlurSearch }

}

export default useSearch;