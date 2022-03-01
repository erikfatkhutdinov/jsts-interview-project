import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  repositoriesWrapper: {
  },
  reposButton: {},
  reposContent: {}
})

const Repositories = (props: object) => {

  const styles = useStyles()

  return (
    <div className={styles.repositoriesWrapper}>
      <div className={styles.reposButton}>Repositories</div>
      <div className={styles.reposContent}>Content</div>
    </div>
  )
}

export default Repositories