import React from "react";
import {makeStyles, styled} from "@material-ui/styles";
import SearchButton from "../button/SearchButton";

const useStyles = makeStyles({
  inputWrapper: {
    padding: '20px',
  },
  input: {
    width: '500px',
    height: '25px',
    fontSize: '20px',
    marginRight: '10px'
  },
})

const Header = (props: any) => {

  const styles = useStyles()

  const inputValue: any = React.createRef()

  const updateInputText = () => {
    const text: string = inputValue.current.value
    props.updateInputText(text)
  }

  const searchUser = () => {
    if (!props.inputText) return
    props.searchUser(props.inputText)
  }

  const onEnter = (e: any) => {
    if (!props.inputText || e.key !== 'Enter') return
    props.searchUser(props.inputText)
  }


  return (
    <div className={styles.inputWrapper}>
      <input onChange={updateInputText} onKeyDown={onEnter} value={props.inputText} ref={inputValue} className={styles.input} />
      <SearchButton onButtonClick={searchUser} />
    </div>
  )
}

export default Header