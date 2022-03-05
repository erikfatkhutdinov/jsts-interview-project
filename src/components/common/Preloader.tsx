import React from "react";
import preloader from "../../assets/images/preloader.svg";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  preloaderWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const Preloader = () => {
  const styles = useStyles()

  return (
    <div className={styles.preloaderWrapper}>
      <img src={preloader} alt={'Loading...'} />
    </div>
  )
}

export default Preloader