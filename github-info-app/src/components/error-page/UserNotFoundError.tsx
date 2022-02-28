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

  const getErrorText = () => {
    switch (props.userDataErrorCode) {
      case 404:
        return `User ${props.userName} not found`
      default:
        return ''
    }
  }


  return (
    <div className={styles.error}>{getErrorText()}</div>
  )
}

export default UserNotFoundError