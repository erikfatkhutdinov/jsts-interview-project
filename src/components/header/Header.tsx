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

  if (props.path && !props.userName) {
    //props.searchUser(props.path)
  }

  const inputValue: any = React.createRef()

  

  const updateInputText = () => {
    const text: string = inputValue.current.value
    props.updateInputText(text)
  }

  const onButtonClick = () => {
    if (!props.inputText) return
    props.searchUser(props.inputText)
  }
  

  return (
    <div className={styles.inputWrapper}>

        <input
          autoFocus={true}
          onChange={updateInputText}
          value={props.inputText}
          ref={inputValue}
          className={styles.input}
          placeholder={'username'}
        />
        <SearchButton userName={props.userName} onButtonClick={onButtonClick} />


    </div>
  )
}

export default Header