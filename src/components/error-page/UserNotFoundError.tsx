import React from 'react'
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  error: {
    fontSize: '40px',
    boxSizing: 'border-box',
    wordWrap: 'break-word'
  }
})

const UserNotFoundError = (props: any) => {
  const styles = useStyles()

  return (
    <div className={styles.error}>User {props.userName} not found</div>
  )
}

export default UserNotFoundError