import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  userInfoWrapper: {
  }
})

const Organisations = (props: object) => {

  const styles = useStyles()

  return (
    <div className={styles.userInfoWrapper}>
    </div>
  )
}

export default Organisations