import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
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

const SearchButton = (props: any) => {

  const styles = useStyles()
  return <button onClick={props.onButtonClick} className={styles.searchButton}>search</button>
}

export default SearchButton