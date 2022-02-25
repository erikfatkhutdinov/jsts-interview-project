import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  repositoriesWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    border: '1px solid #111',
    borderRadius: '10px'
  }
})

const Repositories = (props: object) => {

  const styles = useStyles()

  return (
    <div className={styles.repositoriesWrapper}>
    </div>
  )
}

export default Repositories