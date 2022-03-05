import React from 'react'
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  notFound: {
    padding: '20px',
    fontSize: '40px'
  }
})

const DataNotFound = (props: any) => {
  const styles = useStyles()
  return <div className={styles.notFound}>{props.notFoundData} not found</div>
}
export default DataNotFound