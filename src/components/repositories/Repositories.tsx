import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  repositoriesWrapper: {
  },
  reposContent: {}
})

const Repositories = (props: object) => {

  const styles = useStyles()

  return (
    <div className={styles.repositoriesWrapper}>
      <div className={styles.reposContent}>Repositories</div>
    </div>
  )
}

export default Repositories