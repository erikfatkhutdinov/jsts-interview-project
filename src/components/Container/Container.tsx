import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#fff',
    color: '#222',
    padding: '0 10px'
  }
})

function Container(props: any) {
  const styles = useStyles()
  return (
    <div className={styles.container}>
     {props.component()}
    </div>
  )
}

export default Container