import React from "react";
import {makeStyles, styled} from "@material-ui/styles";

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
  searchButton: {
    backgroundColor: '#222',
    borderRadius: '4px',
    borderStyle: 'none',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: ' "Farfetch Basis","Helvetica Neue",Arial,sans-serif',
    fontSize: '20px',
    margin: '0',
    outline: 'none',
    textAlign: 'center',
    textTransform: 'none',
    padding: '3px 10px',
}


})


const Header = (props: any) => {

const styles = useStyles()

  return (
    <div className={styles.inputWrapper}>
      <input className={styles.input} />
      <button className={styles.searchButton}>search</button>
    </div>
  )
}

export default Header