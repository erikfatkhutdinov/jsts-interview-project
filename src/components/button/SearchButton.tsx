import React from "react";
import {makeStyles} from "@material-ui/styles";
import { NavLink } from "react-router-dom";

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
    padding: '3px'
  },
  navlinkSlyles: {
    textDecoration: 'none',
    color: '#fff',
    padding: '3px 10px',
  }
})

const SearchButton = (props: any) => {
  const styles = useStyles()
  const path = `/${props.userName}`

  return (
    <button className={styles.searchButton}>
       <NavLink 
        onClick={props.onButtonClick}
        to={path} 
        className={styles.navlinkSlyles}
       >search</NavLink>
    </button>
  ) 
}
export default SearchButton