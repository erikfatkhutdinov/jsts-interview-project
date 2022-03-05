import React from "react";
import {makeStyles} from "@material-ui/styles";
import SearchButton from "../button/SearchButton";

const useStyles = makeStyles({
  inputWrapper: {
    padding: '20px 0px',
    textAlign: 'center'
  },
  input: {
    width: '500px',
    height: '25px',
    fontSize: '20px',
    marginRight: '10px',
    padding: '0px 7px',
  },
})

const Header = (props: any) => {
  const styles = useStyles()

  const inputValue: any = React.createRef()

  const updateInputText = () => {
    const text: string = inputValue.current.value
    props.updateInput(text)
  }

  const onButtonClick = (e: any) => {
    if (!props.inputText) {
      e.preventDefault()
      return
    }
    props.search(props.inputText)
  }

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      props.onEnter(props.inputText)
    }
  }
  
  return (
    <div className={styles.inputWrapper}>
        <input
          onKeyDown={onKeyDown}
          autoFocus={true}
          onChange={updateInputText}
          value={props.inputText}
          ref={inputValue}
          className={styles.input}
          placeholder={'username'}
        />
        <SearchButton userName={props.inputText} onButtonClick={onButtonClick} />
    </div>
  )
}

export default Header